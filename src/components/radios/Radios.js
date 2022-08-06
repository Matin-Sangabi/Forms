import { Fragment } from "react";

const Radio = ({ formik, radios }) => {
    console.log(formik)
  return (
    <div>
        {radios.map((item , index)=>{
            
            return (
              <Fragment key={index}>
                <input
                  type="radio"
                  id={item.htmlFor}
                  name="gender"
                  value={item.value}
                  onChange={formik.handleChange}
                  checked={formik.values.gender === item.value}
                />
                <label htmlFor={item.htmlFor}>{item.label}</label>
              </Fragment>
            );
        })}
    </div>
  );
};

export default Radio;

/*
<input
        type="radio"
        id={htmlFor}
        name={name}
        value={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label htmlFor={htmlFor}>{label}</label>
      {formik.errors[name] && formik.touched[name] && (
        <p>{formik.errors[name]}</p>
      )}
*/