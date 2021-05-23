import React from "react";
import CustomButton from "../../CMS/CustomButton/CustomButton";
import CustomCheckbox from "../../CMS/CustomCheckbox/CustomCheckbox";
import CustomDropdown from "../../CMS/CustomDropdown/CustomDropdown";
import CustomForm from "../../CMS/CustomForm/CustomForm";
import CustomInput from "../../CMS/CustomInput/CustomInput";
import Translate from "../../functions/translate";
import { LeftArrow, MNEFlag, UKFlag } from "../../Icons/Icons";
import {
    CountryDropdown,
    RegionDropdown,
    CountryRegionData,
} from "react-country-region-selector";
import {
    lettersOnlyValidation,
    passwordStrength,
} from "../../functions/utilFunctions/validations";
import Modal from "../../CMS/Modal/Modal";
import { ModalContent } from "../../CMS/Modal/ModalContent";

class Form extends React.Component<any, any> {
    state = {
        form: {
            firstName: {
                value: "",
                errors: [],
            },
            lastName: {
                value: "",
                errors: [],
            },
            address: {
                value: "",
                errors: [],
            },
            country: {
                value: "",
                errors: [],
            },
            gender: {
                value: "",
                errors: [],
            },
            email: {
                value: "",
                errors: [],
            },
            username: {
                value: "",
                errors: [],
            },
            password: {
                value: "",
                errors: [],
            },
            repeatPassword: {
                value: "",
                errors: [],
            },
            termsAndConditions: false,
        },

        genders: [
            { value: 1, label: "Woman" },
            { value: 2, label: "Man" },
            { value: 3, label: "Transgender" },
            { value: 4, label: "Non-binary/non-conforming" },
            { value: 5, label: "Prefer not to respond" },
        ],
        countries: [
            { value: 0, label: "Afghanistan" },
            { value: 1, label: "Albania" },
            { value: 2, label: "Algeria" },
            { value: 3, label: "Andorra" },
            { value: 4, label: "Angola" },
            { value: 5, label: "Anguilla" },
            { value: 6, label: "Antigua & Barbuda" },
            //  Argentina
            //             Armenia
            //             Australia
            //             Austria
            //             Azerbaijan
            //             Bahamas
            //             Bahrain
            //             Bangladesh
            //             Barbados
            //             Belarus
            //             Belgium
            //             Belize
            //             Benin
            //             Bermuda
            //             Bhutan
            //             Bolivia
            //             Bosnia & Herzegovina
            //             Botswana
            //             Brazil
            //             Brunei Darussalam
            //             Bulgaria
            //             Burkina Faso
            //             Burundi
            //             Cambodia
            //             Cameroon
            //             Canada
            //             Cape Verde
            //             Cayman Islands
            //             Central African Republic
            //             Chad
            //             Chile
            //             China
            //             China - Hong Kong / Macau
            //             Colombia
            //             Comoros
            //             Congo
            //             Congo, Democratic Republic of (DRC)
            //             Costa Rica
            //             Croatia
            //             Cuba
            //             Cyprus
            //             Czech Republic
            //             Denmark
            //             Djibouti
            //             Dominica
            //             Dominican Republic
            //             Ecuador
            //             Egypt
            //             El Salvador
            //             Equatorial Guinea
            //             Eritrea
            //             Estonia
            //             Eswatini
            //             Ethiopia
            //             Fiji
            //             Finland
            //             France
            //             French Guiana
            //             Gabon
            //             Gambia, Republic of The
            //             Georgia
            //             Germany
            //             Ghana
            //             Great Britain
            //             Greece
            //             Grenada
            //             Guadeloupe
            //             Guatemala
            //             Guinea
            //             Guinea-Bissau
            //             Guyana
            //             Haiti
            //             Honduras
            //             Hungary
            //             Iceland
            //             India
            //             Indonesia
            //             Iran
            //             Iraq
            //             Israel and the Occupied Territories
            //             Italy
            //             Ivory Coast (Cote d'Ivoire)
            //             Jamaica
            //             Japan
            //             Jordan
            //             Kazakhstan
            //             Kenya
            //             Korea, Democratic Republic of (North Korea)
            //             Korea, Republic of (South Korea)
            //             Kosovo
            //             Kuwait
            //             Kyrgyz Republic (Kyrgyzstan)
            //             Laos
            //             Latvia
            //             Lebanon
            //             Lesotho
            //             Liberia
            //             Libya
            //             Liechtenstein
            //             Lithuania
            //             Luxembourg
            //             Madagascar
            //             Malawi
            //             Malaysia
            //             Maldives
            //             Mali
            //             Malta
            //             Martinique
            //             Mauritania
            //             Mauritius
            //             Mayotte
            //             Mexico
            //             Moldova, Republic of
            //             Monaco
            //             Mongolia
            //             Montenegro
            //             Montserrat
            //             Morocco
            //             Mozambique
            //             Myanmar/Burma
            //             Namibia
            //             Nepal
            //             Netherlands
            //             New Zealand
            //             Nicaragua
            //             Niger
            //             Nigeria
            //             North Macedonia, Republic of
            //             Norway
            //             Oman
            //             Pacific Islands
            //             Pakistan
            //             Panama
            //             Papua New Guinea
            //             Paraguay
            //             Peru
            //             Philippines
            //             Poland
            //             Portugal
            //             Puerto Rico
            //             Qatar
            //             Reunion
            //             Romania
            //             Russian Federation
            //             Rwanda
            //             Saint Kitts and Nevis
            //             Saint Lucia
            //             Saint Vincent and the Grenadines
            //             Samoa
            //             Sao Tome and Principe
            //             Saudi Arabia
            //             Senegal
            //             Serbia
            //             Seychelles
            //             Sierra Leone
            //             Singapore
            //             Slovak Republic (Slovakia)
            //             Slovenia
            //             Solomon Islands
            //             Somalia
            //             South Africa
            //             South Sudan
            //             Spain
            //             Sri Lanka
            //             Sudan
            //             Suriname
            //             Sweden
            //             Switzerland
            //             Syria
            //             Tajikistan
            //             Tanzania
            //             Thailand
            //             Timor Leste
            //             Togo
            //             Trinidad & Tobago
            //             Tunisia
            //             Turkey
            //             Turkmenistan
            //             Turks & Caicos Islands
            //             Uganda
            //             Ukraine
            //             United Arab Emirates
            //             United States of America (USA)
            //             Uruguay
            //             Uzbekistan
            //             Venezuela
            //             Vietnam
            //             Virgin Islands (UK)
            //             Virgin Islands (US)
            //             Yemen
            //             Zambia
            //             Zimbabwe
        ],
        secondStep: false,
        trigger: false,
        counter: 0,
        showSuccessModal: false,
        showFailedModal: false,
    };

    selectCountry = (val: any) => {
        this.setState({ country: val });
    };
    handleCheckbox = () => {
        this.setState((prevState: any) => ({
            form: {
                ...prevState.form,
                termsAndConditions: !prevState.termsAndConditions,
            },
        }));
    };
    handleInput = (name: any, data: any) => {
        this.setState((prevState: any) => ({
            form: {
                ...prevState.form,
                [name]: {
                    value: data.value,
                    errors: data.errors,
                },
            },
        }));
    };

    handleReturnToFirstStep = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        this.setState({ secondStep: false });
    };
    handleFirstStep = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const { firstName, lastName, address } = this.state.form;
        const form: any = {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
        };
        const errors = {} as any;
        const formData = new FormData();

        Object.keys(form).forEach((e: any) => {
            formData.append(e, form[e]);
        });

        Object.keys(form).forEach((e) => {
            if (!form[e]) {
                errors[e] = {
                    value: form[e],
                    errors: ["INPUT_REQUIRED"],
                };
            }
            // Validations for letters only, length of inputs
            if (
                (e === "firstName" &&
                    !lettersOnlyValidation(firstName.value)) ||
                (e === "lastName" && !lettersOnlyValidation(lastName.value))
            ) {
                errors[e] = {
                    value: "",
                    errors: ["ONLY_LETTERS"],
                };
            }
            if (
                (e === "firstName" && firstName.value.length < 2) ||
                (e === "lastName" && lastName.value.length < 2)
            ) {
                errors[e] = {
                    value: form[e].value,
                    errors: ["MUST_BE_LONGER_THAN_2"],
                };
            }
            if (
                (e === "firstName" && firstName.value.length > 25) ||
                (e === "lastName" && lastName.value.length > 25)
            ) {
                errors[e] = {
                    value: form[e].value,
                    errors: ["MUST_BE_SHORTER_THAN_25"],
                };
            }
            if (e === "address" && address.value.length > 25) {
                errors[e] = {
                    value: form[e].value,
                    errors: ["MUST_BE_SHORTER_THAN_25"],
                };
            }
        });
        if (Object.keys(errors).length !== 0) {
            this.setState((prevState: { form: any }) => ({
                form: {
                    ...prevState.form,
                    ...errors,
                },
            }));
        } else {
            this.setState({ secondStep: true, counter: 0 });
        }
    };

    handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const {
            password,
            repeatPassword,
            email,
            username,
            firstName,
            lastName,
            gender,
            country,
            address,
            termsAndConditions,
        } = this.state.form;
        const form: any = {
            password: password.value,
            repeatPassword: repeatPassword.value,
            email: email.value,
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value,
            gender: gender.value,
            country: country.value,
            address: address.value,
            termsAndConditions,
        };
        const errors = {} as any;

        Object.keys(form).forEach((e) => {
            if (!form[e] && e !== "gender" && e !== "country") {
                errors[e] = {
                    value: form[e],
                    errors: ["INPUT_REQUIRED"],
                };
            }
            if (
                (e === "password" && password.value.length < 8) ||
                (e === "repeatPassword" && repeatPassword.value.length < 8)
            ) {
                errors[e] = {
                    value: form[e],
                    errors: ["MIN_PSW_LENGTH"],
                };
            } else if (
                (e === "password" && !passwordStrength(password.value)) ||
                (e === "repeatPassword" &&
                    !passwordStrength(repeatPassword.value))
            ) {
                errors[e] = {
                    value: form[e],
                    errors: ["PASSWORD_STRENGTH"],
                };
            } else if (
                (e === "password" || e === "repeatPassword") &&
                password.value !== repeatPassword.value
            ) {
                errors[e] = {
                    value: form[e],
                    errors: ["PSW_DONT_MATCH"],
                };
            }
        });
        if (!termsAndConditions) {
            this.setState({ showFailedModal: true });
        }
        if (Object.keys(errors).length !== 0) {
            this.setState((prevState: { form: any }) => ({
                form: {
                    ...prevState.form,
                    ...errors,
                },
            }));
        } else {
            this.setState((prevState: any) => ({
                form: {
                    ...prevState.form,
                },
                showSuccessModal: !prevState.showSuccessModal,
            }));
            // this.submitApplication(form);
        }
    };

    // submitApplication = (e: { preventDefault: () => void }) => {
    //     e.preventDefault();
    //     return new Promise((fulfill, reject) => {
    //         //success
    //         setTimeout(
    //             (this.toggleModal = () => {
    //                 fulfill({
    //                     info: {
    //                         success: true,
    //                     },
    //                 });
    //             }
    //             ),
    //             1000
    //         );
    //     });
    // };
    toggleModal = (name: string | number) => {
        this.setState((prevState: any) => ({
            [name]: !prevState[name],
        }));
        if (name === "showSuccessModal") {
            window.location.reload();
        }
    };

    render() {
        const { form, secondStep, countries, genders } = this.state;
        // const styles = {
        //     transform: `translate(-${counter * 50}%)`,
        // };
        return (
            <div>
                <Modal
                    toggleModal={this.toggleModal}
                    modalName="showSuccessModal"
                    className={this.state.showSuccessModal ? "visible" : ""}
                    modalWrapperClasses="w-400 padding-10"
                >
                    <ModalContent
                        type="success"
                        title="SUCCESSFULLY_REGISTERED"
                        text={"CONGRATULATIONS"}
                        modalName="showSuccessModal"
                        toggleModal={this.toggleModal}
                    />
                </Modal>
                <Modal
                    toggleModal={this.toggleModal}
                    modalName="showFailedModal"
                    className={
                        this.state.showFailedModal ? "visible error" : "error"
                    }
                    modalWrapperClasses="w-500 padding-10"
                >
                    <ModalContent
                        type="failure"
                        title="FAILED"
                        text={"TERMS_MANDATORY"}
                        modalName="showFailedModal"
                        toggleModal={this.toggleModal}
                    />
                </Modal>
                <div className="d-flex h-vh-100     align-items-center justify-content-center ">
                    <CustomForm className="d-flex flex-column align-items-center justify-content-between registrationForm">
                        <div className="d-flex flex-column align-items-center  w-100perc ">
                            <span className="titleWelcome">
                                <Translate text="WELCOME" />
                            </span>
                            <div className="animcon" id="animcon">
                                <img
                                    id="hands"
                                    src="https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/hands.png"
                                />
                            </div>
                            <div className="d-flex mb-30 mt-20">
                                <CustomButton
                                    className={`${
                                        this.props.lang === "en"
                                            ? "btn-header-active mr-20"
                                            : "btn-header mr-20"
                                    }`}
                                    onClick={this.props.english}
                                >
                                    <div className=" d-flex">
                                        <span className="language">
                                            <UKFlag width={20} />
                                        </span>
                                    </div>
                                </CustomButton>
                                <CustomButton
                                    className={`${
                                        this.props.lang === "me"
                                            ? "btn-header-active "
                                            : "btn-header"
                                    }`}
                                    onClick={this.props.serbian}
                                >
                                    <div className=" d-flex">
                                        <span>
                                            <MNEFlag width={20} />
                                        </span>
                                    </div>
                                </CustomButton>
                            </div>
                            {!secondStep ? (
                                <div className="w-100perc">
                                    {" "}
                                    <div className="mb-30 w-100perc">
                                        <CustomInput
                                            name="firstName"
                                            label="FIRST_NAME"
                                            type="letters"
                                            handleInput={this.handleInput}
                                            value={form.firstName.value}
                                            errors={form.firstName.errors}
                                            required
                                        />
                                    </div>
                                    <div className="mb-30  w-100perc">
                                        <CustomInput
                                            name="lastName"
                                            label="LAST_NAME"
                                            type="letters"
                                            handleInput={this.handleInput}
                                            value={form.lastName.value}
                                            errors={form.lastName.errors}
                                            required
                                        />
                                    </div>
                                    <div className="mb-30  w-100perc">
                                        <CustomInput
                                            name="address"
                                            label="ADDRESS"
                                            type="text"
                                            handleInput={this.handleInput}
                                            value={form.address.value}
                                            errors={form.address.errors}
                                            required
                                        />
                                    </div>
                                    <div className="w-100perc mb-30">
                                        <CustomDropdown
                                            name="country"
                                            data={countries}
                                            placeholder={
                                                <Translate text="COUNTRY-optional" />
                                            }
                                            value={countries.find(
                                                (country: any) =>
                                                    country.value ===
                                                    form.country.value
                                            )}
                                            handleChange={this.handleInput}
                                        />
                                        {/* <CountryDropdown
                                            classes="rcrs-country"
                                            value={country}
                                            onChange={(val) =>
                                                this.selectCountry(val)
                                            }
                                        /> */}
                                    </div>
                                    <div className="mb-30">
                                        <CustomDropdown
                                            name="gender"
                                            data={genders}
                                            placeholder={
                                                <Translate text="GENDER-optional" />
                                            }
                                            value={genders.find(
                                                (gender: any) =>
                                                    gender.value ===
                                                    form.gender.value
                                            )}
                                            handleChange={this.handleInput}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="w-100perc">
                                    {" "}
                                    <div className="mb-30 w-100perc">
                                        <CustomInput
                                            name="email"
                                            label="EMAIL"
                                            type="email"
                                            handleInput={this.handleInput}
                                            value={form.email.value}
                                            errors={form.email.errors}
                                            required
                                        />
                                    </div>
                                    <div className="mb-30  w-100perc">
                                        <CustomInput
                                            name="password"
                                            label="PASSWORD"
                                            type="password"
                                            handleInput={this.handleInput}
                                            value={form.password.value}
                                            errors={form.password.errors}
                                            errorClass="error-xs"
                                            required
                                        />
                                    </div>
                                    <div className="mb-30  w-100perc">
                                        <CustomInput
                                            name="repeatPassword"
                                            label="REPEAT_PASSWORD"
                                            type="password"
                                            handleInput={this.handleInput}
                                            value={form.repeatPassword.value}
                                            errors={form.repeatPassword.errors}
                                            errorClass="error-xs"
                                            required
                                        />
                                    </div>
                                    <div className="mb-30  w-100perc">
                                        <CustomInput
                                            name="username"
                                            label="USERNAME"
                                            type="text"
                                            handleInput={this.handleInput}
                                            value={form.username.value}
                                            errors={form.username.errors}
                                            required
                                        />
                                    </div>
                                    <div className="mb-30 d-flex">
                                        <div className="mr-10">
                                            <CustomCheckbox
                                                name="termsAndConditions"
                                                // checked={
                                                //     form.termsAndConditions
                                                // }
                                                handleChange={
                                                    this.handleCheckbox
                                                }
                                            />
                                        </div>
                                        <span className="terms d-flex align-items-center">
                                            <Translate text="TERMS_AND_CONDITIONS" />
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className={`${
                                secondStep
                                    ? "d-flex w-71perc align-self-start justify-content-between"
                                    : "d-flex align-item-center justify-content-center"
                            }`}
                        >
                            {secondStep && (
                                <div
                                    className="d-flex pointer"
                                    onClick={this.handleReturnToFirstStep}
                                >
                                    <LeftArrow width={30} className="icon" />
                                </div>
                            )}
                            <div>
                                <CustomButton
                                    onClick={
                                        !secondStep
                                            ? this.handleFirstStep
                                            : this.handleSubmit
                                    }
                                    className={secondStep ? "btn-create" : ""}
                                >
                                    <Translate
                                        text={
                                            !secondStep ? "NEXT_STEP" : "SUBMIT"
                                        }
                                    />
                                </CustomButton>
                            </div>
                        </div>
                    </CustomForm>
                </div>
            </div>
        );
    }
}

export default Form;
