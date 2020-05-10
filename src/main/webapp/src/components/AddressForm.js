import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Button,
    ButtonGroup,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    Label, UncontrolledButtonDropdown
} from 'reactstrap';
import axios from "axios";

class AddressForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addressName: "",
            addressLine: "",
            addressLandmark: "",
            addressPincode: "",
            cityName: "",
            cityState: "",
            cityCountry: "",
            isDefaultAddress: "",
            loginErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = () => {

            const {addressName, addressLine, addressLandmark, addressPincode, cityName, cityState,cityCountry, isDefaultAddress} = this.state;
            axios
                .post(
                    "http://localhost:8081/postAddress/1",
                    {
                        addressName: addressName,
                        addressLine: addressLine,
                        addressLandmark: addressLandmark,
                        addressPincode: addressPincode,
                        cityName: cityName,
                        cityState: cityState,
                        cityCountry: cityCountry,
                        isDefaultAddress:  isDefaultAddress
                    }
                    // ,
                    // { withCredentials: true }
                )
                .then(response => {
                    console.log("Address Response", response)
                    console.log("Address Response Data", response.data)
                    console.log("Address Response Data Status", response.data.status)

                    if (response.data.status) {
                        this.props.handleSuccessfulAuth(response.data);
                    }
                })
                .catch(error => {
                    console.log("Address error", error);
                });



    };


    render() {
        const {
            showLogo,
            anameLabel,
            anameInputProps,
            alineLabel,
            alineInputProps,
            alandmarkLabel,
            alandmarkInputProps,
            apincodeLabel,
            apincodeInputProps,
            acityLabel,
            acityInputProps,
            astateLabel,
            astateInputProps,
            acountryLabel,
            acountryInputProps,
            isdefaultLabel,
            isdefaultInputProps,
            children,
            onLogoClick,
        } = this.props;

        return (
            <Form onSubmit={this.handleSubmit}>
                {showLogo && (
                    <div className="text-center pb-4">
                        <img
                            src={logo200Image}
                            className="rounded"
                            style={{ width: 60, height: 60, cursor: 'pointer' }}
                            alt="logo"
                            onClick={onLogoClick}
                        />
                    </div>
                )}

                    <FormGroup>
                        <Label for={anameLabel}>{anameLabel}</Label>
                        <Input
                            {...anameInputProps}
                            value={this.state.addressName}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                <FormGroup>
                    <Label for={alineLabel}>{alineLabel}</Label>
                    <Input
                        {...alineInputProps}
                        value={this.state.addressLine}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for={alandmarkLabel}>{alandmarkLabel}</Label>
                    <Input
                        {...alandmarkInputProps}
                        value={this.state.addressLandmark}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for={apincodeLabel}>{apincodeLabel}</Label>
                    <Input
                        {...apincodeInputProps}
                        value={this.state.addresspincode}
                        onChange={this.handleChange}
                    />
                </FormGroup>


                <FormGroup>
                    <Label for={acountryLabel}>{acountryLabel}</Label>
                    <UncontrolledButtonDropdown className="m-1">
                        <DropdownToggle caret>Country</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem {...acountryInputProps}
                            value="india"
                            color="primary"
                            onClick={() => this.setState({ cityCountry: "india" })}
                            active={this.state.cityCountry === "india"}>india</DropdownItem>
                            <DropdownItem
                                {...acountryInputProps}
                                value="other"
                                color="primary"
                                onClick={() => this.setState({ cityCountry: "other" })}
                                active={this.state.cityCountry === "other"}>Other</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>

                </FormGroup>

                <FormGroup>
                    <Label for={astateLabel}>{astateLabel}</Label>
                    <UncontrolledButtonDropdown className="m-1">
                        <DropdownToggle caret>State  </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem {...astateInputProps}
                                          value="karnataka"
                                          color="primary"
                                          onClick={() => this.setState({ cityState: "karnataka" })}
                                          active={this.state.cityState === "karnataka"}>karnataka</DropdownItem>
                            <DropdownItem
                                {...acountryInputProps}
                                value="gujarat"
                                color="primary"
                                onClick={() => this.setState({ cityCountry: "gujarat" })}
                                active={this.state.cityState === "gujarat"}>gujarat</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>

                </FormGroup>

                <FormGroup>
                    <Label for={acityLabel}>{acityLabel}</Label>
                    <UncontrolledButtonDropdown className="m-1">
                        <DropdownToggle caret>City   </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem {...acityInputProps}
                                          value="bangalore"
                                          color="primary"
                                          onClick={() => this.setState({ cityName: "bangalore" })}
                                          active={this.state.cityName === "bangalore"}>bangalore</DropdownItem>
                            <DropdownItem
                                {...acityInputProps}
                                value="mehsana"
                                color="primary"
                                onClick={() => this.setState({ cityName: "mehsana" })}
                                active={this.state.cityName === "mehsana"}>mehsana</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>

                </FormGroup>




                <FormGroup>
                    <Label for={isdefaultLabel}>{isdefaultLabel}</Label>
                    <ButtonGroup className="ml-3">
                        <Button
                            {...isdefaultInputProps}
                            value="true"
                            color="primary"
                            onClick={() => this.setState({ isDefaultAddress: "true" })}
                            active={this.state.isDefaultAddress === "true"}
                        >
                            Yes
                        </Button>
                        <Button
                            {...isdefaultInputProps}
                            value="false"
                            color="primary"
                            onClick={() => this.setState({ isDefaultAddress: "false" })}
                            active={this.state.isDefaultAddress === "false"}
                        >
                           No
                        </Button>
                    </ButtonGroup>
                </FormGroup>




                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        'Agree the terms and policy'
                    </Label>
                </FormGroup>
                <hr />
                <Button
                    size="lg"
                    className="bg-gradient-theme-left border-0"
                    block
                    onClick={this.handleSubmit}>
                    Add Address
                </Button>



                {children}
            </Form>
        );
    }
}



AddressForm.propTypes = {
    showLogo: PropTypes.bool,
    anameLabel: PropTypes.string,
    anameInputProps: PropTypes.object,
    alineLabel: PropTypes.string,
    alineInputProps: PropTypes.object,
    alandmarkLabel: PropTypes.string,
    alandmarkInputProps: PropTypes.object,
    apincodeLabel: PropTypes.string,
    apincodeInputProps: PropTypes.object,
    acityLabel: PropTypes.string,
    acityInputProps: PropTypes.object,
    astateLabel: PropTypes.string,
    astateInputProps: PropTypes.object,
    acountryLabel: PropTypes.string,
    acountryInputProps: PropTypes.object,
    isdefaultLabel: PropTypes.string,
    isdefaultInputProps: PropTypes.object,

    onLogoClick: PropTypes.func,
};

AddressForm.defaultProps = {
    showLogo: true,
    anameLabel: 'Address Name',
    anameInputProps: {
        type: 'text',
        placeholder: 'your Address Name',
        name:"addressName",
    },
    alineLabel: 'Address line',
    alineInputProps: {
        type: 'text',
        placeholder: 'your Address Line',
        name: "addressLine",
    },
    alandmarkLabel: 'Address Landmark',
    alandmarkInputProps: {
        type: 'text',
        placeholder: 'Enter Landmark',
        name: "addressLandmark",
    },
    apincodeLabel: 'Address Pincode',
    apincodeInputProps: {
        type: 'text',
        placeholder: 'your areas Pincode' ,
        name: "addressPincode",
    },
    acityLabel: 'City',
    acityInputProps: {
        type: 'text',
        placeholder: 'your City',
        name: "cityName",
    },
    astateLabel: 'State',
    astateInputProps: {
        type: 'text',
        placeholder: 'your State',
        name: "cityState",
    },
    acountryLabel: 'Country',
    acountryInputProps: {
        type: 'text',
        placeholder: 'your Country',
        name: "cityCountry",
    },

    isdefaultLabel: 'is this your default Address',
    isdefaultInputProps: {
        name: "isDefaultAddress",
    },
    onLogoClick: () => {},
};

export default AddressForm;