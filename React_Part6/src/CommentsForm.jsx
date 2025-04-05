import React from 'react'

const CommentsForm = () => {
    const [formData, setFormData] = React.useState({
        username: "",
        comment: "",
        rating: 5,
    });
    const handleInputChange = (e) => {
        setFormData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ username: "", comment: "", rating: 5 });
    };
  return (
    <div>
        <h4>Give a comment!</h4>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='username' onChange={handleInputChange} name='username' value={formData.username} /> <br /> <br />
            <textarea name="comment" id="" placeholder='Write us a comment!' onChange={handleInputChange} value={formData.comment} ></textarea> <br /> <br />
            <input type="number" placeholder='rating' min={1} max={5} onChange={handleInputChange} name='rating' value={formData.rating} /> <br /> <br />
            <button>Add Comment</button><br /> <br />
        </form>
    </div>
  )
}

export default CommentsForm