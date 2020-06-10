import React, {useState} from 'react';


const Form = props => {

    const [member, setMember] = useState({
        name:'Your Name',
        email:'Email Adress',
        role:'Position',
      
      });

      const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
      };
    
      const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({
             name:'',
            email:'',
            role:'',
         });
      };

    return(
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor='nameInput'>Name</label>
                <br/>
                <input type='text' id='nameInput' name='name' onChange={handleChanges} value={member.name}/>
                <br/>
                <label htmlFor='emailInput'>Email</label>
                <br/>
                <input type='text' id='emailInput' name='email' onChange={handleChanges} value={member.email}/>
                <br/>
                <label htmlFor='roleInput'>Role</label>
                <br/>
                <input type='text' id='roleInput' name='role' onChange={handleChanges} value={member.role}/>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;