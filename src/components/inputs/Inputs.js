const Input = ({ formik, name, label, type = "text", autoComplete ="off" }) => {
  return (
    <div className="forms-content">
      <input
        className={
          formik.errors[name] ? "form-control " : "form-control control-isvalid"
        }
        type={type}
        name={name}
        {...formik.getFieldProps(name)}
        autoComplete={autoComplete}
      />
      <label className={""}>{label}</label>
      {formik.errors[name] && formik.touched[name] && (
        <p>{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default Input;
