import { useState } from 'react';
import '../css/addFood.css';

import axios from 'axios';

function AddFoodItemForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // setFormData({
    //     ...formData,
    //     [event.target.name]: event.target.value,
    //   });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add code to handle form submission, such as sending the data to a server or updating the state of the app.
    // For this example, we'll just log the form data to the console.
    axios({
        method: 'POST',
        url: 'http://localhost:8081/FoodItem ',
        headers: { 'Content-Type': 'application/json' },
        data: {
            name:formData.name,
            description:formData.description,
            price:formData.price,
            category:formData.category
 
           
        }
    }).then(res => {
        console.log(res);


   
    }).catch(err =>console.log(err))

    console.log(formData);
    console.log("Item Added");
    alert("data submitted");
  }

  return (
    <form onSubmit={handleSubmit} className="add-food-form">
      <label className="add-food-label">
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="add-food-input" />
      </label>
      <label className="add-food-label">
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleInputChange} className="add-food-input" />
      </label>
      <label className="add-food-label">
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleInputChange} className="add-food-input" />
      </label>
      <label className="add-food-label">
        Category
        <input type="text" name="category" value={formData.category} onChange={handleInputChange} className="add-food-input" />
      </label>
      <button type="submit" className="add-food-button">Add Food Item</button>
    </form>
  );
}
export default AddFoodItemForm;