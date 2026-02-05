import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { ActionButton } from '../components/ActionButton';
import { lightColors, colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, borderRadius } from '../theme/spacing';

export const EmergencySOSScreen = ({ navigation }: any) => {
    const [selectedDirection, setSelectedDirection] = useState('northbound');

    const directions = [
        { id: 'northbound', label: 'Northbound', destination: 'To Perlis / Penang' },
        { id: 'southbound', label: 'Southbound', destination: 'To Johor Bahru' },
        { id: 'eastbound', label: 'Eastbound', destination: 'To Kuantan / Terengganu' },
        { id: 'westbound', label: 'Westbound', destination: 'To Port Klang' },
    ];

    return (
        <View style={styles.container}>
            <Header
                title="Emergency SOS"
                onBackPress={() => navigation.goBack()}
            />
            <ScrollView style={styles.scrollView}>
                {/* Call Button */}
                <View style={styles.callButtonContainer}>
                    <TouchableOpacity style={styles.callButton}>
                        <Text style={styles.callIcon}>📞</Text>
                    </TouchableOpacity>
                </View>

                {/* Contact Info */}
                <View style={styles.contactInfo}>
                    <Text style={styles.contactName}>NADIA RAHMAN</Text>
                    <Text style={styles.contactNumber}>+60 12-345 6789</Text>
                </View>

                {/* Direction Selection */}
                <View style={styles.directionSection}>
                    <Text style={styles.directionLabel}>HEADING TO</Text>
                    {directions.map(direction => (
                        <TouchableOpacity
                            key={direction.id}
                            style={styles.directionItem}
                            onPress={() => setSelectedDirection(direction.id)}>
                            <View style={styles.radioContainer}>
                                <View
                                    style={[
                                        styles.radioOuter,
                                        selectedDirection === direction.id && styles.radioOuterSelected,
                                    ]}>
                                    {selectedDirection === direction.id && (
                                        <View style={styles.radioInner} />
                                    )}
                                </View>
                                <View style={styles.directionTextContainer}>
                                    <Text style={styles.directionText}>{direction.label}</Text>
                                    <Text style={styles.destinationText}>{direction.destination}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Bottom Button */}
            <View style={styles.bottomContainer}>
                <ActionButton
                    title="CALL FOR ASSISTANCE"
                    icon="phone"
                    onPress={() => console.log('Call')}
                />
                <Text style={styles.disclaimer}>
                    PLUS RONDA WILL BE DISPATCHED TO YOUR LOCATION
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightColors.background,
    },
    scrollView: {
        flex: 1,
    },
    callButtonContainer: {
        alignItems: 'center',
        paddingTop: spacing.xl + spacing.lg,
        paddingBottom: spacing.lg,
    },
    callButton: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    },
    callIcon: {
        fontSize: 48,
    },
    contactInfo: {
        alignItems: 'center',
        paddingBottom: spacing.xl,
    },
    contactName: {
        fontSize: typography.fontSize.xl,
        fontWeight: '700',
        color: lightColors.text,
        marginBottom: spacing.xs,
    },
    contactNumber: {
        fontSize: typography.fontSize.sm,
        color: lightColors.textSecondary,
    },
    directionSection: {
        paddingHorizontal: spacing.lg,
    },
    directionLabel: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: lightColors.textSecondary,
        letterSpacing: typography.letterSpacing.wider,
        marginBottom: spacing.md,
    },
    directionItem: {
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: lightColors.border,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioOuter: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: lightColors.border,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing.md,
    },
    radioOuterSelected: {
        borderColor: colors.primary,
    },
    radioInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.primary,
    },
    directionTextContainer: {
        flex: 1,
    },
    directionText: {
        fontSize: typography.fontSize.base,
        fontWeight: '600',
        color: lightColors.text,
    },
    destinationText: {
        fontSize: typography.fontSize.sm,
        color: lightColors.textSecondary,
    },
    bottomContainer: {
        padding: spacing.lg,
        backgroundColor: lightColors.background,
    },
    disclaimer: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
        textAlign: 'center',
        marginTop: spacing.md,
        letterSpacing: typography.letterSpacing.wide,
    },
});
