export const schema = [
  {
    name: "name",
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
  {
    name: "address",
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
];
