import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    Button,
    ButtonText,
} from '../Button/styles';

interface ButtonProps extends TouchableOpacityProps {
    color: 'primary' | 'secondary';
    title: string;
}

export function CustomButton({
    title,
    color,
}: ButtonProps) {
    return (
        <Button
            activeOpacity={0.9}
            color={color}>
            <ButtonText>
                {title}
            </ButtonText>
        </Button>
    )
}


