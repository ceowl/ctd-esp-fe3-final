import React, {useState} from "react";

const Form = () => {

  const [userContact, setUserContact] = useState({
    userCompleteName: '',
    userEmail: ''
  });

  const [message, setMessage] = useState('');

  const validations = () => {
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if(userContact.userCompleteName.length > 5 && emailTest.test(userContact.userEmail)){
      setMessage(`Gracias ${userContact.userCompleteName}, te contactaremos cuando antes vía mail`);
    }else{
      setMessage("Por favor verifique su información nuevamente")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validations()
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" onChange={(e) => setUserContact({...userContact, userCompleteName: e.target.value})}></input>
        <input type="text" onChange={(e) => setUserContact({...userContact, userEmail: e.target.value})}></input>
        <button>Send</button>
        {message}
      </form>
    </div>
  );
};

export default Form;
