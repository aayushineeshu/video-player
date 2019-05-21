import React,{Component} from 'react';

class App extends Component {
  render(){
    return(
      <div>
        hy
      </div>
    )
  }
   
}

export default App




// import React from 'react';
// import * as Yup from 'yup';
// import styled from 'styled-components';
// import { 
//   Formik, 
//   Form,
//   Field as FormikField, 
//   ErrorMessage } from 'formik';

// export const Field = styled(FormikField)`
//   margin-top: 0px;
//   margin-bottom: 5px;
//   background-color: #fff;
//   border-radius: 5px;
//   &::placeholder {
//     color: #bbb;
//     font-weight: normal;
//   }
// `;

// const LabeledFieldWrapper = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: minMax(60px, auto) 1fr;
//   grid-template-rows: auto auto;
//   margin-bottom: 0.4em;
//   align-items: baseline;
// `;

// export const LabeledField = ({ name, label, left, right, ...rest }) => (
//   <LabeledFieldWrapper>
//     <Field
//       id={name}
//       name={name}
//     />
//   </LabeledFieldWrapper>
// );

// const App = ({values,onSubmit,...props}) =>
// { 
// return(
//   <div>
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//       }}
//       validationSchema={Yup.object().shape({
//         firstName: Yup.string().required('Required'),
//         lastName: Yup.string().required('Required')
//       })}
//       onSubmit={onSubmit}
//       validationSchema={Yup.object().shape({
          
//       })

//       }
//       onSubmit={(values,  { setSubmitting, resetForm }) => {
//         setTimeout(() => {
//           console.log("submiited",values)
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({ isSubmitting }) => (
        
//         <Form>
//           <LabeledField type="firstName" name="firstName"
//           />
//           <LabeledField type="lastName" name="lastName" 
//             />
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//       </div>
// );
//       }

// export default App


// import React,{Component} from 'react'
// import { Table } from 'antd';

// class App extends Component{
//     state={
//       firstName:'',
//       lastName:'',
//       submitted:false
//     }
    
//     handleChangefirstName= (event) => {
//       this.setState({
//         firstName:event.target.value,
//       })
//     }

//     handleChangelastName= (event) => {
//       this.setState({
//         lastName:event.target.value,
//       })
//     }

//     handleSubmit = (event) => {
//       this.setState({
//         submitted:true
//       })
//       event.preventDefault();
//     }

//     display(){
//       return <p>{this.state.firstName}</p>
//        }

//   render(){
    
//     const { values } = this.state

//     const columns = [
//       {
//         title: 'firstname',
//         dataIndex: 'name',
//       },
//       {
//         title: 'lastname',
//         dataIndex: 'age',
//       },
//     ];

//     const data = [
//       {
//         name: this.state.submitted && this.state.firstName,
//         age: this.state.submitted && this.state.lastName,
//       },
//       {
//         name: 'Jim Green',
//         age: 42,
//       },
//     ];

//     return(
//       <div>
//         {console.log(this.state.firstName)}
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.handleChangefirstName} value={this.state.firstName}/>
//           <input onChange={this.handleChangelastName} value={this.state.lastName}/>
//           <button>submit</button>
//           </form>
//           {this.state.submitted && this.display()}
//           <Table columns={columns} dataSource={data}  />
//         </div>
//     )
//   }
// }

// export default App