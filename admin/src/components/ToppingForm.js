import * as React from 'react'

export default function ToppingForm(props) {
  // console.log(props)
  return (<div>
    <form onSubmit={props.handleSubmit}>

        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Naam: (min. char 3)</label>
            <div className="col-sm-10">
              <input id="name" type="text" name="name" onChange={props.handleChange} className="form-control" />
            </div>
        </div>

        <div className="form-group row">
          <label htmlFor="toppingType" className="col-sm-2 col-form-label">Topping type:</label>
            <div className="col-sm-10" onChange={props.handleChange} className="form-control" >
              <select name="toppingType">
                {props.toppingTypes.length > 0 && 
                props.toppingTypes.map(type => {
                  return (
                    <option value={type.id} key={type.id}>{type.name}</option>
                  )
                })
                }
              </select>
            </div>
        </div> 
        
        <div className="form-group row">
          <label htmlFor="image" className="col-sm-2 col-form-label">Afbeelding:</label>
            <div className="col-sm-10">
            <input type="file" id="image" onChange={props.fileSelectHandler}/>
            </div>
        </div>             

      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary" disabled={props.submitBtnDisabled}>Opslaan</button>
        </div>
        </div>
      </form>
      </div>)
}

