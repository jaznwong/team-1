import React, { Component } from 'react';
import { Button, ButtonToolbar, FormGroup, FormControl, Jumbotron, MenuItem, SplitButton
 } from "react-bootstrap";

class Survey extends Component {
  constructor(props, context) {
  super(props, context);

  this.handleChange = this.handleChange.bind(this);

  this.state = {
    value: '',
    states: '',
    zipcode: '',
    country: '',
    group: '',
    renderStates: true,
    renderZipcode: false,
    renderCountry: false,
    renderGroup: false
  };
}

handleClick = (param) =>{
    switch(param){
	    case 1:
        return this.setState({
            renderStates: false,
            renderZipcode: true
        });
        case 2:
        return this.setState({
            renderStates: false,
            renderCountry: true
        })
        case 3:
        return this.setState({
            renderZipcode: false,
            renderGroup: true
        })
        default:
    }
}

handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({zipcode: false});
      this.setState({group: true});
    }
}	

getValidationState() {
  const length = this.state.value.length;
  if (length > 10) return 'success';
  else if (length > 5) return 'warning';
  else if (length > 0) return 'error';
  return null;
}

handleChange(e) {
  this.setState({ value: e.target.value });
}

  render() {
    return (
      <div>
        <Jumbotron>
            <h1> Survey </h1>
        </Jumbotron>
        {this.state.renderStates ?(
            <div>
            <Jumbotron>
                <h2> Are you from the United States? </h2>
                <ButtonToolbar>
                    <Button onClick={()=>this.handleClick(1)} value="yes" bsSize="large" block>Yes</Button>
                    <Button onClick={()=>this.handleClick(2)} value="no" bsSize="large" block>No</Button>
                </ButtonToolbar>
            </Jumbotron>
            </div>
        ):<div></div>}
        
        {this.state.renderZipcode ?(
        <div>
            <Jumbotron>
                <h2> What is your Zip Code? </h2>
                <form>
                    <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                    >
                    <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter Zipcode"
                    onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    </FormGroup>
                </form>
                <button onClick={()=>this.handleClick(3)}>Enter</button>
            </Jumbotron>
        </div>
        ):<div></div>}

        {this.state.renderCountry ?(
        <div>        
        <Jumbotron>
          <h2> What country are you from? </h2>
            <SplitButton title="Country" pullRight id="split-button-pull-right" bsSize="large">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
        </Jumbotron>
        </div>
        ):<div></div>}
        
        {this.state.renderGroup ?(
        <div>             
        <Jumbotron>
          <h2> Are you alone or with a group? </h2>
            <ButtonToolbar>
              <Button bsSize="large" block>Alone</Button>
              <Button bsSize="large" block>Group</Button>
            </ButtonToolbar>
        </Jumbotron>
        </div>
        ):<div></div>}

        <Jumbotron>
          <h2> How many people? (Including you) </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> Where did you go? </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> What activities did you do? </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> How long did you stay for/plan to stay for? </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> How did you get to Central Park? </h2>
          <ButtonToolbar>
            <Button bsSize="large" block>
              Yes
            </Button>
            <Button bsSize="large" block>No</Button>
          </ButtonToolbar>
        </Jumbotron>

        <Jumbotron>
          <h2> Age? </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> Gender? </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>

        <Jumbotron>
          <h2> Ethnicity? </h2>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right" bsSize="large">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </Jumbotron>
      </div>
    )
  }
}
export default Survey;