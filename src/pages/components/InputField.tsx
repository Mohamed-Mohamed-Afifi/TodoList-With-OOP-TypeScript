import React from 'react'

const InputField = () => {
  return (
    <>
    <div className='d-flex'>
        <form className="form">
                <input type="email" className="form__field" placeholder="Add New Task !" />
                <button type="button" className="btn btn--primary btn--inside uppercase">Add</button>
        </form>
    </div>
    </>
  )
}

export default InputField