import React from 'react';
import { EyeOff } from 'react-native-feather';
import {
    Button,
    ButtonText,
} from '../Button/styles';

interface Props {
    type: 'default' | 'pagament' | 'learn';
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