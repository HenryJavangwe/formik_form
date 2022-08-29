import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
// import { fieldValidationSchema } from "../../configs/validationSchemas";
import ToggleButton from "@mui/material/ToggleButton";
import { ToggleButtonGroup } from "@mui/material";
import { MyFormValues } from "../configs/interfaces";

const FormikForm = () => {
  const initialValues: MyFormValues = {
    Q1: 0,
    Q2: 0,
    Q3: "",
    Q4: false,
    Q5: false,
    Q6: false,
    Q7: "",
    Q8: "",
    Q9: false,
    Q10: false,
    Q11: "",
    Q12: "",
    Q13: "",
    Q14: ""
  };

  const [formData, setFormData] = useState(initialValues);

  const [showChildren, setShowChildren] = useState(false);
  const [showGrandChildren, setShowGrandChildren] = useState(false);
  const [businessInteruption, setBusinessInteruption] = useState(false);
  const [businessInteruptionUnchecked, setBusinessInteruptionUnchecked] =
    useState(false);

  const publicLiability = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    if (target.value === "false") {
      setShowChildren(false);
    } else {
      setShowChildren(true);
    }
  };

  const showGrandChildrenFunc = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    if (target.value === "false") {
      setShowGrandChildren(false);
    } else {
      setShowGrandChildren(true);
    }
  };

  const handleBusinessInteruption = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    if (target.value === "false") {
      setBusinessInteruption(false);
    } else {
      setBusinessInteruption(true);
    }
  };

  const handleBusinessInteruptionUnchecked = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    if (target.value === "false") {
      setBusinessInteruptionUnchecked(false);
    } else {
      setBusinessInteruptionUnchecked(true);
    }
  };

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.log(
            "Before form state update: ",
            JSON.stringify(values, null, 2)
          );
          await new Promise((resolve) => setTimeout(resolve, 500));
          setFormData(values);
        }}
        // validationSchema={fieldValidationSchema}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} className="form">
            <>
              <div className="inputWrapper">
                <label className="label" htmlFor="name">
                  1. Currency question - annual revenue for instance, this label
                  has been purposefully lenghtened to show text wrap and line
                  density"
                </label>
                <Field
                  name="Q1"
                  type="number"
                  onChange={props.handleChange}
                  value={props.values.Q1}
                  className="field"
                />
              </div>
              <div className="inputWrapper">
                <label className="label" htmlFor="name">
                  2. Integer question
                </label>
                <Field
                  name="Q2"
                  type="number"
                  onChange={props.handleChange}
                  value={props.values.Q2}
                  className="field"
                />
              </div>
              <div className="inputWrapper">
                <label className="label" htmlFor="name">
                  3. This is a free text question Q45
                </label>
                <Field
                  name="Q3"
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.Q3}
                  className="field"
                />
              </div>
              <div className="inputWrapper">
                <label className="label" htmlFor="name">
                  4. Show public liability?
                </label>
                <div className="buttonWrapper">
                  <ToggleButtonGroup
                    value={showChildren}
                    exclusive
                    onChange={(e) => publicLiability(e)}
                    aria-label="text alignment"
                  >
                    {showChildren === false ? (
                      <ToggleButton
                        value={true}
                        name="Q4"
                        aria-label="left aligned"
                        onClick={props.handleChange}
                      >
                        Yes
                      </ToggleButton>
                    ) : (
                      <ToggleButton
                        value={false}
                        name="Q4"
                        aria-label="left aligned"
                        onClick={props.handleChange}
                      >
                        No
                      </ToggleButton>
                    )}
                  </ToggleButtonGroup>
                </div>
              </div>
              {showChildren ? (
                <div className="childWrapper">
                  <div className="inputWrapper">
                    <label className="label" htmlFor="">
                      Child Question 1
                    </label>
                    <div className="buttonWrapper">
                      <ToggleButtonGroup
                        value={showGrandChildren}
                        exclusive
                        onChange={(e) => showGrandChildrenFunc(e)}
                        aria-label="text alignment"
                        className="buttoGroup"
                      >
                        {showGrandChildren === false ? (
                          <ToggleButton
                            value={true}
                            name="Q5"
                            aria-label="left aligned"
                            onClick={props.handleChange}
                          >
                            Yes
                          </ToggleButton>
                        ) : (
                          <ToggleButton
                            value={false}
                            name="Q5"
                            aria-label="left aligned"
                            onClick={props.handleChange}
                          >
                            No
                          </ToggleButton>
                        )}
                      </ToggleButtonGroup>
                    </div>
                  </div>
                  {showGrandChildren ? (
                    <div className="grandChildWrapper">
                      <div className="inputWrapper">
                        <label className="label" htmlFor="Q6">
                          GrandChild Question
                        </label>
                        <Field name="Q6" as="select" className="field-dropdown">
                          <option value="option1">Response option 1</option>
                          <option value="option2">Response option 2</option>
                          <option value="option3">Response option 3</option>
                          <option value="option4">Response option 4</option>
                        </Field>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className="inputWrapper">
                    <label className="label" htmlFor="Q7">
                      Child Question 2 (This is a free text question 534)
                    </label>
                    <Field
                      name="Q7"
                      type="text"
                      onChange={props.handleChange}
                      value={props.values.Q7}
                      className="field"
                    />
                  </div>
                  <div className="inputWrapper">
                    <label className="label" htmlFor="Q8">
                      Child Question 3
                    </label>
                    <div className="buttonWrapper">
                      <div
                        role="group"
                        aria-labelledby="my-radio-group"
                        className="field-radio"
                      >
                        <label className="label" id="my-radio-group">
                          10K
                          <Field type="radio" name="Q8" value="response1" />
                        </label>

                        <label className="label" id="my-radio-group">
                          100K
                          <Field type="radio" name="Q8" value="response2" />
                        </label>
                        <label className="label" id="my-radio-group">
                          999.5K
                          <Field type="radio" name="Q8" value="response3" />
                        </label>
                        <label className="label" id="my-radio-group">
                          1.25M
                          <Field type="radio" name="Q8" value="response4" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div className="inputWrapper">
                <label className="label" htmlFor="">
                  5. Business Interuption
                </label>
                <div className="buttonWrapper">
                  <ToggleButtonGroup
                    value={businessInteruption}
                    exclusive
                    onChange={(e) => handleBusinessInteruption(e)}
                    aria-label="text alignment"
                    className="buttoGroup"
                  >
                    {businessInteruption === false ? (
                      <ToggleButton
                        value={true}
                        name="Q9"
                        aria-label="left aligned"
                        onClick={props.handleChange}
                      >
                        Yes
                      </ToggleButton>
                    ) : (
                      <ToggleButton
                        value={false}
                        name="Q9"
                        aria-label="left aligned"
                        onClick={props.handleChange}
                      >
                        No
                      </ToggleButton>
                    )}
                  </ToggleButtonGroup>
                </div>
              </div>
              <div className="inputWrapper">
                <label className="label" htmlFor="">
                  6. Business Interuption unchecked
                </label>
                <div className="buttonWrapper">
                  <ToggleButtonGroup
                    value={businessInteruptionUnchecked}
                    exclusive
                    onChange={(e) => handleBusinessInteruptionUnchecked(e)}
                    aria-label="text alignment"
                    className="buttoGroup"
                  >
                    {businessInteruptionUnchecked === false ? (
                      <ToggleButton
                        value={true}
                        name="Q10"
                        aria-label="left aligned"
                        onClick={props.handleChange}
                      >
                        Yes
                      </ToggleButton>
                    ) : (
                      <ToggleButton
                        value={false}
                        name="Q10"
                        aria-label="left aligned"
                        onClick={props.handleChange}
                      >
                        No
                      </ToggleButton>
                    )}
                  </ToggleButtonGroup>
                </div>
              </div>
              <div className="inputWrapper">
                <label className="label" htmlFor="name">
                  7. Question - Single choice question
                </label>
                <Field name="Q11" as="select" className="field-dropdown">
                  <option value="option1">Response option 1</option>
                  <option value="options2">Response option 2</option>
                  <option value="options3">Response option 3</option>
                  <option value="option4">Response option 4</option>
                </Field>
              </div>
              <div className="inputWrapper">
                <label className="label" id="my-radio-group">
                  8. Single choice question - RadioButtonList
                </label>
                <div
                  role="group"
                  aria-labelledby="my-radio-group"
                  className="field-radio"
                >
                  <label className="label" id="my-radio-group">
                    choice 1
                    <Field type="radio" name="Q12" value="One" />
                  </label>

                  <label className="label" id="my-radio-group">
                    choice 2
                    <Field type="radio" name="Q12" value="two" />
                  </label>
                  <label className="label" id="my-radio-group">
                    choice 3
                    <Field type="radio" name="Q12" value="three" />
                  </label>
                  <label className="label" id="my-radio-group">
                    choice 4
                    <Field type="radio" name="Q12" value="four" />
                  </label>
                </div>
              </div>
              <div className="inputWrapper">
                <label className="label" htmlFor="name">
                  9. Question - Single choice question
                </label>
                <Field name="Q13" as="select" className="field-dropdown">
                  <option value="option1">Response option 1</option>
                  <option value="option2">Response option 2</option>
                  <option value="option3">Response option 3</option>
                  <option value="option4">Response option 4</option>
                </Field>
              </div>
              <div className="inputWrapper">
                <label className="label" htmlFor="name">
                  10. Question - Single choice question
                </label>
                <Field name="Q14" as="select" className="field-dropdown">
                  <option value="option1">Response option 1</option>
                  <option value="option2">Response option 2</option>
                  <option value="option3">Response option 3</option>
                  <option value="option4">Response option 4</option>
                </Field>
              </div>
            </>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <div className="displayDiv">
          <p>Answer to Q1 is:  {formData.Q1}</p>
          <p>Answer to Q2 is:  {formData.Q2}</p>
          <p>Answer to Q3 is:  {formData.Q3}</p>
          <p>Answer to Q4 is:  {formData.Q4}</p>
          <p>Answer to Q5 is:  {formData.Q5}</p>
          <p>Answer to Q6 is:  {formData.Q6}</p>
          <p>Answer to Q7 is:  {formData.Q7}</p>
          <p>Answer to Q8 is:  {formData.Q8}</p>
          <p>Answer to Q9 is:  {formData.Q9}</p>
          <p>Answer  toQ10 is:  {formData.Q10}</p>
          <p>Answer  toQ11 is:  {formData.Q11}</p>
          <p>Answer  toQ12 is:  {formData.Q12}</p>
          <p>Answer  toQ13 is:  {formData.Q13}</p>
          <p>Answer  toQ14 is:  {formData.Q14}</p>
      </div>
    </div>
  );
};

export default FormikForm;
