import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, lightColors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, borderRadius } from '../theme/spacing';

interface ActionButtonProps {
    title: string;
    onPress: () => void;
    icon?: string;
    loading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
    title,
    onPress,
    icon,
    loading = false,
    disabled = false,
    variant = 'primary',
    style,
    textStyle,
}) => {
    const getButtonStyle = () => {
        switch (variant) {
            case 'secondary':
                return styles.secondaryButton;
            case 'danger':
                return styles.dangerButton;
            default:
                return styles.primaryButton;
        }
    };

    return (
        <TouchableOpacity
            style={[styles.button, getButtonStyle(), disabled && styles.disabled, style]}
            onPress={onPress}
            disabled={disabled || loading}>
            {loading ? (
                <ActivityIndicator color={colors.white} />
            ) : (
                <>
                    {icon && <Icon name={icon} size={20} color={colors.white} style={styles.icon} />}
                    <Text style={[styles.text, textStyle]}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: spacing.md + 4,
        paddingHorizontal: spacing.lg,
        borderRadius: borderRadius.lg,
        minHeight: 56,
    },
    primaryButton: {
        backgroundColor: colors.primary,
    },
    secondaryButton: {
        backgroundColor: lightColors.border,
    },
    dangerButton: {
        backgroundColor: colors.red,
    },
    disabled: {
        opacity: 0.5,
    },
    icon: {
        marginRight: spacing.sm,
    },
    text: {
        color: colors.white,
        fontSize: typography.fontSize.sm,
        fontWeight: '700',
        letterSpacing: typography.letterSpacing.widest,
        textTransform: 'uppercase',
    },
});
