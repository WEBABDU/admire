import * as yup from "yup";

import { isEmpty } from "services/helpers/isEmpty";

yup.string().typeError("You are wrong").required("required");


export const createSchema = (schema, data, dataPciker) => {
  let yupSchema = {};
  let initialValues = {};
  // console.log(dataPciker);
  console.log(data);
  
  const isActionUpdate = !isEmpty(data);
  
  schema.forEach((config) => {
    const { name, value, ...props } = config;
  
    createYupSchema(yupSchema, { name, ...props });

    if (!isActionUpdate) initialValues[name] = value || "";
    if(isActionUpdate){
      initialValues[name] = data[name]
      initialValues['date'] = data['other_date']
      initialValues['sum'] = data['sum_order']
      
    }
  });

  // if (!dataPciker && isActionUpdate) initialValues = data;
  // if (dataPciker && isActionUpdate) initialValues = dataPciker(data);

  return { initialValues, validationSchema: yup.object().shape(yupSchema) };
};

const createYupSchema = (schema, config) => {
  const { name, validationType, validations = [] } = config;

  // console.log(config);
  

  if (!yup[validationType]) {
    return schema;
  }

  let validator = yup[validationType]();

  validations.forEach((validation) => {
    const { params, type } = validation;
    // console.log(validator);

    if (type === "required") validator = validator[type]("Required");
    if (type === "typeError") validator = validator[type](`Invalid ${type}`);
    if (type === "phone")
      validator = validator.matches(
        /(?:\+[9]{2}[8] \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2})/g,
        "Phone number is not valid"
      );
    // if(type === 'number') validator = validator[type]('Number')
    if (params && params.length) validator = validator[type](...params);
    if (params) validator = validation[type](params);
  });
  schema[name] = validator;
  return schema;
};
