export const productSchema = [
  {
    name: "sum",
    validationType: "string",
    validations: [
      {
        type: "typeError",
      },
      {
        type: "required",
      },
    ],
  },
  {
    name: "received_money",
    validationType: "string",
    validations: [
      {
        type: "typeError",
      },
      {
        type: "required",
      },
    ],
  },
  {
    name: "type",
    validationType: "string",
    validations: [
      {
        type: "typeError",
      },
      {
        type: "required",
      },
    ],
  },
  {
    name: "payment_type",
    validationType: "string",
    validations: [
      {
        type: "typeError",
      },
      {
        type: "required",
      },
    ],
  },
  {
    name: "date",
    validationType: "string",
    value: new Date(),
    validations: [
      {
        type: "typeError",
      },
      {
        type: "required",
      },
    ],
  },
  // {
  //   name: "address",
  //   validationType: "string",
  //   validations: [
  //     {
  //       type: "typeError",
  //     },
  //     {
  //       type: "required",
  //     },
  //   ],
  // },
];
