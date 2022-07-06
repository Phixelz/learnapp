import React from "react";
import { TouchableOpacityProps } from "react-native";
import { CustomButton, ButtonText } from "../Button/styles";

interface ButtonProps extends TouchableOpacityProps {
    type: "payment";
    title: string;
}

export function Button({ type, title, ...rest }, {

}: ButtonProps) {
    return (
        <CustomButton
            activeOpacity={0.8}
            type={type}
            {...rest}>
            <ButtonText>{title}</ButtonText>
        </CustomButton>
    );
}
