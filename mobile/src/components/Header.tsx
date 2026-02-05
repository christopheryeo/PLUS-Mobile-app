import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { lightColors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

interface HeaderProps {
    title: string;
    onBackPress?: () => void;
    showBack?: boolean;
    rightComponent?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
    title,
    onBackPress,
    showBack = true,
    rightComponent,
}) => {
    return (
        <View style={styles.container}>
            {showBack ? (
                <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                    <Icon name="arrow-back" size={24} color={lightColors.text} />
                </TouchableOpacity>
            ) : (
                <View style={styles.backButton} />
            )}
            <Text style={styles.title}>{title}</Text>
            {rightComponent ? (
                <View style={styles.rightContainer}>{rightComponent}</View>
            ) : (
                <View style={styles.backButton} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        backgroundColor: lightColors.background,
    },
    backButton: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: typography.fontSize.sm,
        fontWeight: '700',
        color: lightColors.text,
        letterSpacing: typography.letterSpacing.widest,
        textTransform: 'uppercase',
        flex: 1,
        textAlign: 'center',
    },
    rightContainer: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
