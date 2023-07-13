import React from "react";

interface Tform {
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
}

const Form = () => {
  const [form, setForm ] = React.useState<Tform> ({firstName: '', lastName: '', email:'', password:''})

  const handleFormInput = (e: React.FormEvent) => {
    // console.log(e.target.value)
    // console.log(e.target.name)

    const target = e.target as HTMLFormElement
    setForm({...form, [target.name]: target.value })
  }
  console.log('here is form ->', form)

  return (
    <form action="submit">
      <label htmlFor="">First Name</label>
      <input type="text" name="firstName" id="" onChange={e => console.log(e.target.value)} />
      <br />
      <label htmlFor="">Last Name</label>
      <input type="text" name="lasttName" id="" onChange={e => console.log(e.target.value)}/>
      <br />
      <label htmlFor="">Email</label>
      <input type="text" name="email" id="" onChange={e => console.log(e.target.value)}/>
      <br />
      <label htmlFor="">Password</label>
      <input type="password" name="password" id="" onChange={e => console.log(e.target.value)}/>
    </form>
  );
};

export default Form;
