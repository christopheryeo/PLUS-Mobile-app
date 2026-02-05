import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { lightColors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

interface StatsCardProps {
    label: string;
    value: string;
    style?: ViewStyle;
}

export const StatsCard: React.FC<StatsCardProps> = ({ label, value, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: spacing.md + 4,
        backgroundColor: lightColors.surface,
    },
    label: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: lightColors.primary,
        letterSpacing: typography.letterSpacing.widest,
        textTransform: 'uppercase',
        marginBottom: spacing.xs,
    },
    value: {
        fontSize: typography.fontSize.lg,
        fontWeight: '700',
        color: lightColors.text,
    },
});
