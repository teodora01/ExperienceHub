import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import Translate from "../../functions/translate";
import { SuccessIcon, WarningIcon } from "../../Icons/Icons";
interface IModalContent {
    type: "success" | "warning" | "failure" | "question" | "clone";
    modalName: string;
    item?: any;
    text: string;
    title: string;
    buttonText?: string;
    toggleModal: (modalName: string) => void;
    onConfirm?: () => void;
}
export const ModalContent = ({
    type,
    modalName,
    title,
    item,
    toggleModal,
    text,
    buttonText,
}: IModalContent) => {
    return (
        <div className="modal-content d-flex flex-column align-items-center justify-content-between min-h-200">
            <span className="title text-center w-100perc f-s-18 uppercase py-10">
                <Translate text={title} />
            </span>
            <div className="content d-flex f-s-16 px-10 align-items-center flex-column">
                {type === "failure" && (
                    <WarningIcon width={80} className="margin-30" />
                )}
                {type === "success" && (
                    <div className="animcon" id="animcon">
                        <img
                            id="hands"
                            src="https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/hands.png"
                        />
                    </div>
                )}

                <div className="modalText">
                    <Translate text={text} />
                </div>
            </div>

            {type === "failure" && (
                <div className="modal-buttons d-flex justify-content-center w-100perc pt-10">
                    <CustomButton
                        className="btn-cancel w-150"
                        type="button"
                        onClick={() => toggleModal && toggleModal(modalName)}
                    >
                        <Translate text="OK" />
                    </CustomButton>
                </div>
            )}
            {type === "success" && (
                <div className="modal-buttons d-flex justify-content-center w-100perc pt-10">
                    <CustomButton
                        className="btn-create w-150"
                        type="button"
                        onClick={() => toggleModal && toggleModal(modalName)}
                    >
                        <Translate text="OK" />
                    </CustomButton>
                </div>
            )}
        </div>
    );
};
