import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    Button,
    ButtonText,
} from '../Button/styles';

interface Props extends TouchableOpacityProps {
    type: 'primary' | 'secondary';
    title: string;
}

export function CustomButton({
    title,
    type,
}: Props) {
    return (
        <Button 
            activeOpacity={0.9}
            type={type}>
            <ButtonText>
                {title}
            </ButtonText>
        </Button>
    )
}