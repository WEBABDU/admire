export const schema = [
  {
    name: "first_name",
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
    name: "last_name",
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
    name: "phone",
    validationType: "string",
    validations: [
      {
        type: "phone",
      },
      {
        type: "required",
      },
    ],
  },
];
