import { useState } from "react";

/**
 * https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
 * 
 * Хук для упращения работы с input
 * 
 */

// // Usage
// function NameForm(props) {
//     const { value, bind, reset } = useInput('');

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         alert(`Submitting Name ${value}`);
//         reset();
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Name:
//                 <input type="text" {...bind} />
//             </label>
//             <input type="submit" value="Submit" />
//         </form>
//     );
// }

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

export default useInput