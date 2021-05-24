import React from "react";
import CustomButton from "../../CMS/CustomButton/CustomButton";
import CustomCheckbox from "../../CMS/CustomCheckbox/CustomCheckbox";
import CustomDropdown from "../../CMS/CustomDropdown/CustomDropdown";
import { Loader } from "../../Loader/Loader";

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
            { value: 1, label: "Afghanistan" },
            { value: 2, label: "Albania" },
            { value: 3, label: "Algeria" },
            { value: 4, label: "Andorra" },
            { value: 5, label: "Angola" },
            { value: 6, label: "Anguilla" },
            { value: 7, label: "Antigua & Barbuda" },
            { value: 8, label: "Argentina" },
            { value: 9, label: "Armenia" },
            { value: 10, label: "Australia" },
            { value: 11, label: "Austria" },
            { value: 12, label: "Azerbaijan" },
            { value: 13, label: "Bahamas" },
            { value: 14, label: "Bahrain" },
            { value: 15, label: "Bangladesh" },
            { value: 16, label: "Barbados" },
            { value: 17, label: "Belarus" },
            { value: 18, label: "Belgium" },
            { value: 19, label: "Belize" },
            { value: 20, label: "Benin" },
            { value: 21, label: "Bermuda" },
            { value: 22, label: "Bhutan" },
            { value: 23, label: "Bolivia" },
            { value: 24, label: "Bosnia & Herzegovina" },
            { value: 25, label: "Botswana" },
            { value: 26, label: "Brazil" },
            { value: 27, label: "Brunei Darussalam" },
            { value: 28, label: "Bulgaria" },
            { value: 29, label: "Burkina Faso" },
            { value: 30, label: "Burundi" },
            { value: 31, label: "Cambodia" },
            { value: 32, label: "Cameroon" },
            { value: 33, label: "Canada" },
            { value: 34, label: "Cape Verde" },
            { value: 35, label: "Cayman Islands" },
            { value: 36, label: "Central African Republic" },
            { value: 37, label: "Chad" },
            { value: 38, label: "Chile" },
            { value: 39, label: "China" },
            { value: 40, label: "Colombia" },
            { value: 41, label: "Comoros" },
            { value: 42, label: "Congo" },
            { value: 43, label: "Congo, Democratic Republic of (DRC)" },
            { value: 44, label: "Costa Rica" },
            { value: 45, label: "Croatia" },
            { value: 46, label: "Cuba" },
            { value: 47, label: "Cyprus" },
            { value: 48, label: "Czech Republic" },
            { value: 49, label: "Denmark" },
            { value: 50, label: "Djibouti" },
            { value: 51, label: "Dominica" },
            { value: 52, label: "Dominican Republic" },
            { value: 53, label: "Ecuador" },
            { value: 54, label: "Egypt" },
            { value: 55, label: "El Salvador" },
            { value: 56, label: "Equatorial Guinea" },
            { value: 57, label: "Eritrea" },
            { value: 58, label: "Estonia" },
            { value: 59, label: "Eswatini" },
            { value: 60, label: "Ethiopia" },
            { value: 70, label: "Fiji" },
            { value: 71, label: "Finland" },
            { value: 72, label: "France" },
            { value: 73, label: "French Guiana" },
            { value: 74, label: "Gabon" },
            { value: 75, label: "Gambia" },
            { value: 76, label: "Georgia" },
            { value: 77, label: "Germany" },
            { value: 78, label: "Ghana" },
            { value: 79, label: "Great Britain" },
            { value: 80, label: "Greece" },
            { value: 81, label: "Grenada" },
            { value: 82, label: "Guadeloupe" },
            { value: 83, label: "Guatemala" },
            { value: 84, label: "Guinea" },
            { value: 85, label: "Guinea-Bissau" },
            { value: 86, label: "Guyana" },
            { value: 87, label: "Haiti" },
            { value: 88, label: "Honduras" },
            { value: 89, label: "Hungary" },
            { value: 90, label: "Iceland" },
            { value: 91, label: "India" },
            { value: 92, label: "Indonesia" },
            { value: 93, label: "Iran" },
            { value: 94, label: "Iraq" },
            { value: 95, label: "Israel" },
            { value: 96, label: "Italy" },
            { value: 97, label: "Ivory Coast" },
            { value: 98, label: "Jamaica" },
            { value: 99, label: "Japan" },
            { value: 100, label: "Jordan" },
            { value: 101, label: "Kazakhstan" },
            { value: 102, label: "Kenya" },
            {
                value: 103,
                label: "Korea, Democratic Republic of (North Korea)",
            },
            { value: 104, label: " Korea, Republic of (South Korea)" },
            { value: 105, label: "Kosovo" },
            { value: 106, label: "Kuwait" },
            { value: 107, label: "Kyrgyz Republic (Kyrgyzstan)" },
            { value: 108, label: "Laos" },
            { value: 109, label: "Latvia" },
            { value: 110, label: "Latvia" },
            { value: 111, label: "Lebanon" },
            { value: 112, label: "Lesotho" },
            { value: 113, label: "Liberia" },
            { value: 114, label: "Libya" },
            { value: 115, label: "Liechtenstein" },
            { value: 116, label: "Lithuania" },
            { value: 117, label: "Luxembourg" },
            { value: 118, label: "Madagascar" },
            { value: 119, label: "Malawi" },
            { value: 120, label: "Malaysia" },
            { value: 121, label: "Maldives" },
            { value: 122, label: "Mali" },
            { value: 123, label: "Malta" },
            { value: 124, label: "Martinique" },
            { value: 125, label: "Mauritania" },
            { value: 126, label: "Mauritius" },
            { value: 127, label: "Mayotte" },
            { value: 128, label: "Mexico" },
            { value: 129, label: "Moldova" },
            { value: 130, label: "Monaco" },
            { value: 131, label: "Mongolia" },
            { value: 132, label: "Montenegro" },

            { value: 133, label: "Montserrat" },
            { value: 134, label: "Morocco" },
            { value: 135, label: "Mozambique" },
            { value: 136, label: " Myanmar/Burma" },
            { value: 137, label: "Namibia" },
            { value: 138, label: "Nepal" },
            { value: 139, label: "Netherlands" },
            { value: 140, label: "New Zealand" },
            { value: 141, label: "Nicaragua" },
            { value: 142, label: "Niger" },
            { value: 143, label: "Nigeria" },
            { value: 144, label: "North Macedonia, Republic of" },
            { value: 145, label: "Norway" },
            { value: 146, label: "Oman" },
            { value: 147, label: "Pacific Islands" },
            { value: 148, label: "Pakistan" },
            { value: 149, label: "Panama" },
            { value: 150, label: "Papua New Guinea" },
            { value: 151, label: "Paraguay" },
            { value: 152, label: "Peru" },
            { value: 153, label: "Philippines" },
            { value: 154, label: "Poland" },
            { value: 155, label: "Portugal" },
            { value: 156, label: "Puerto Rico" },
            { value: 157, label: "Qatar" },
            { value: 158, label: "Reunion" },
            { value: 159, label: "Romania" },
            { value: 160, label: "Russian Federation" },
            { value: 161, label: "Rwanda" },
            { value: 162, label: "Saint Kitts and Nevis" },
            { value: 163, label: "Saint Lucia" },
            { value: 164, label: "Saint Vincent and the Grenadines" },
            { value: 165, label: "Samoa" },
            { value: 166, label: "Sao Tome and Principe" },
            { value: 167, label: "Saudi Arabia" },
            { value: 168, label: "Senegal" },
            { value: 169, label: "Serbia" },
            { value: 170, label: "Seychelles" },
            { value: 171, label: "Sierra Leone" },
            { value: 172, label: "Singapore" },
            { value: 173, label: "Slovak Republic (Slovakia)" },
            { value: 174, label: "Slovenia" },
            { value: 175, label: " Solomon Islands" },
            { value: 176, label: "Somalia" },
            { value: 177, label: "South Africa" },
            { value: 178, label: "South Sudan" },
            { value: 179, label: "Spain" },
            { value: 180, label: " Sri Lanka" },
            { value: 181, label: "Sudan" },
            { value: 182, label: "Suriname" },
            { value: 183, label: "Sweden" },
            { value: 184, label: "Switzerland" },
            { value: 185, label: "Syria" },
            { value: 186, label: "Tajikistan" },
            { value: 187, label: "Tanzania" },
            { value: 188, label: "Thailand" },
            { value: 189, label: "Timor Leste" },
            { value: 190, label: "Togo" },
            { value: 191, label: "Trinidad & Tobago" },
            { value: 192, label: "Tunisia" },
            { value: 193, label: "Turkey" },
            { value: 194, label: "Turkmenistan" },
            { value: 195, label: "Turks & Caicos Islands" },
            { value: 196, label: "Uganda" },
            { value: 197, label: "Ukraine" },
            { value: 198, label: "United Arab Emirates" },
            { value: 199, label: "United States of America (USA)" },
            { value: 200, label: "Uruguay" },
            { value: 201, label: "Uzbekistan" },
            { value: 202, label: "Venezuela" },
            { value: 203, label: "Vietnam" },
            { value: 204, label: " Virgin Islands (UK)" },
            { value: 205, label: " Virgin Islands (US)" },
            { value: 206, label: "Yemen" },
            { value: 207, label: "Zambia" },
            { value: 208, label: "Zimbabwe" },
        ],
        secondStep: false,
        trigger: false,
        counter: 0,
        showSuccessModal: false,
        showFailedModal: false,
        showLoader: true,
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ showLoader: false });
        }, 1000);
    }

    // Function for selecting country using plugin
    // selectCountry = (val: any) => {
    //     this.setState({ country: val });
    // };
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

        if (Object.keys(errors).length !== 0) {
            this.setState((prevState: { form: any }) => ({
                form: {
                    ...prevState.form,
                    ...errors,
                },
            }));
            if (Object.keys(errors).length !== 0 && !termsAndConditions) {
                this.setState({ showFailedModal: true });
            }
        } else {
            this.setState((prevState: any) => ({
                form: {
                    ...prevState.form,
                },
            }));
            this.successfullRegistration();
        }
    };

    successfullRegistration = () => {
        setTimeout(() => {
            this.toggleModal("showSuccessModal");
        }, 1000);
    };
    toggleModal = (name: string | number) => {
        this.setState((prevState: any) => ({
            [name]: !prevState[name],
        }));
    };
    reloadPage = () => {
        window.location.reload();
    };
    render() {
        const { form, secondStep, countries, genders, showLoader } = this.state;

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
                        toggleModal={this.reloadPage}
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
                {showLoader ? (
                    <div className="h-vh-100  d-flex justify-content-between align-items-center modalBg">
                        <Loader className="w-200"></Loader>
                    </div>
                ) : (
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
                                                value={
                                                    form.repeatPassword.value
                                                }
                                                errors={
                                                    form.repeatPassword.errors
                                                }
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
                                        <LeftArrow
                                            width={30}
                                            className="icon"
                                        />
                                    </div>
                                )}
                                <div>
                                    <CustomButton
                                        onClick={
                                            !secondStep
                                                ? this.handleFirstStep
                                                : this.handleSubmit
                                        }
                                        className={
                                            secondStep ? "btn-create" : ""
                                        }
                                    >
                                        <Translate
                                            text={
                                                !secondStep
                                                    ? "NEXT_STEP"
                                                    : "SUBMIT"
                                            }
                                        />
                                    </CustomButton>
                                </div>
                            </div>
                        </CustomForm>
                    </div>
                )}
            </div>
        );
    }
}

export default Form;
