export const questions = [
  {
    code: "Q1",
    text: "Currency question - annual revenue for instance, this label has been purposefully lenghtened to show text wrap and line density",
    type: "text",
    minValue: 0,
    maxValue: 2500000,
    disabled: false,
    currencySymbol: "R",
    defaultValue: 0,
    allowDecimal: true,
    conditions: []
  },
  {
    minValue: 0,
    maxValue: 1000,
    defaultValue: 0,
    code: "Integer18",
    text: "Integer question",
    type: "integer",
    conditions: []
  },
  {
    code: "Q45",
    text: "This is a free text question Q45",
    type: "text",
    minLength: 3,
    maxLength: 25,
    textType: "single",
    disabled: false,
    placeholder: "text input placeholder",
    conditions: []
  },
  {
    code: "Q3",
    type: "bool",
    trueLabel: "YES",
    trueValue: "Y",
    falseLabel: "NO",
    falseValue: "N",
    controlType: "SingleButton",
    innerLabel: true,
    defaultValue: null,
    trueFirst: true,
    text: "Show public liability? question 3",
    conditions: [],
    children: [
      {
        code: "Q44",
        conditions: [
          {
            question: "Q3",
            operator: "Equal",
            value: "Y"
          }
        ]
      },
      {
        code: "RB1",
        conditions: [
          {
            question: "Q3",
            operator: "Equal",
            value: "Y"
          }
        ]
      },
      {
        code: "Q4",
        conditions: [
          {
            question: "Q3",
            operator: "Equal",
            value: "Y"
          }
        ]
      }
    ]
  },
  {
    code: "Q4",
    type: "bool",
    trueLabel: "YES",
    trueValue: "Y",
    falseLabel: "NO",
    falseValue: "N",
    innerLabel: true,
    defaultValue: null,
    trueFirst: true,
    text: "Child Question",
    conditions: [
      {
        question: "Q3",
        operator: "Equal",
        value: "Y"
      }
    ],
    children: [
      {
        code: "Q5",
        conditions: [
          {
            question: "Q4",
            operator: "Equal",
            value: "Y"
          }
        ]
      }
    ]
  },
  {
    code: "Q5",
    type: "bool",
    trueLabel: "YES",
    trueValue: "Y",
    falseLabel: "NO",
    falseValue: "N",
    innerLabel: true,
    defaultValue: null,
    trueFirst: true,
    text: "GrandChild Question",
    conditions: [
      {
        question: "Q4",
        operator: "Equal",
        value: "Y"
      }
    ]
  },
  {
    code: "Q44",
    text: "This is a free text question 534",
    type: "text",
    minLength: 3,
    maxLength: 25,
    textType: "single",
    disabled: false,
    placeholder: "text input placeholder",
    conditions: [
      {
        question: "Q3",
        operator: "Equal",
        value: "Y"
      }
    ],
    siblings: ["RB1"]
  },
  {
    type: "radio",
    code: "RB1",
    text: "Single choice question - button list",
    controlType: "RadioButtonList",
    innerLabel: true,
    options: [
      {
        label: "10k",
        value: "response1",
        isDefault: false
      },
      {
        label: "100k",
        value: "response2",
        isDefault: false
      },
      {
        label: "999.5k",
        value: "response3",
        isDefault: false
      },
      {
        label: "1.25M",
        value: "response4",
        isDefault: false
      }
    ],
    conditions: [
      {
        question: "Q3",
        operator: "Equal",
        value: "Y"
      }
    ],
    siblings: ["Q44"]
  },
  {
    code: "Q31",
    type: "bool",
    trueLabel: "YES",
    trueValue: "Y",
    falseLabel: "NO",
    falseValue: "N",
    innerLabel: true,
    defaultValue: null,
    trueFirst: true,
    controlType: "SingleButton",
    text: "Business Interuption",
    conditions: []
  },
  {
    code: "Q312",
    type: "bool",
    trueLabel: "YES",
    trueValue: "Y",
    falseLabel: "NO",
    falseValue: "N",
    innerLabel: true,
    defaultValue: null,
    trueFirst: true,
    controlType: "SingleButton",
    text: "Business Interuption unchecked",
    conditions: []
  },
  {
    type: "radio",
    code: "RB0071",
    text: "Single choice question - dropdown",
    controlType: "DropDownList",
    options: [
      {
        label: "Response option 1 lorem ipsum blah blah blah",
        value: "1111",
        isDefault: false
      },
      {
        label: "Response option Two",
        value: "2222",
        isDefault: false
      },
      {
        label: "Third response option",
        value: "3333",
        isDefault: false
      },
      {
        label: "and the last response option",
        value: "4444",
        isDefault: false
      }
    ],
    conditions: []
  },
  {
    type: "radio",
    code: "RB0070",
    text: "Single choice question - RadioButtonList",
    controlType: "RadioButtonList",
    options: [
      {
        label: "Response option 1 lorem ipsum blah blah blah",
        value: "11110",
        isDefault: false
      },
      {
        label: "Response option Two",
        value: "22220",
        isDefault: false
      },
      {
        label: "Third response option",
        value: "33330",
        isDefault: false
      },
      {
        label: "and the last response option",
        value: "44440",
        isDefault: false
      }
    ],
    conditions: []
  },
  {
    type: "dropdown",
    code: "RB008",
    text: "Multiple choice question - dropdown",
    controlType: "DropDownList",
    options: [
      {
        label: "Response option 1 lorem ipsum blah blah blah",
        value: "1111",
        isDefault: false
      },
      {
        label: "Response option Two",
        value: "2222",
        isDefault: false
      },
      {
        label: "Third response option",
        value: "3333",
        isDefault: false
      },
      {
        label: "and the last response option",
        value: "4444",
        isDefault: false
      },
      {
        label: "and the last response option",
        value: "5555",
        isDefault: false
      }
    ],
    conditions: []
  },
  {
    type: "dropdown",
    code: "RB009",
    text: "Multiple choice question - radio button",
    controlType: "RadioButtonList",
    options: [
      {
        label: "Response option 1 lorem ipsum blah blah blah",
        value: "11111",
        isDefault: false
      },
      {
        label: "Response option Two",
        value: "22222",
        isDefault: false
      },
      {
        label: "Third response option",
        value: "33333",
        isDefault: false
      },
      {
        label: "and the last response option",
        value: "44444",
        isDefault: false
      }
    ],
    conditions: []
  }
];
