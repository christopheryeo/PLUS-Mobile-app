import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from '../components/Header';
import { lightColors, colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, borderRadius } from '../theme/spacing';

export const PlanJourneyScreen = ({ navigation }: any) => {
    const [passengers, setPassengers] = useState(1);
    const [selectedVehicle, setSelectedVehicle] = useState('car');

    const vehicles = [
        { id: 'car', icon: 'directions-car', label: 'CAR' },
        { id: 'motor', icon: 'two-wheeler', label: 'MOTOR' },
        { id: 'bus', icon: 'directions-bus', label: 'BUS' },
        { id: 'truck', icon: 'local-shipping', label: 'TRUCK' },
    ];

    return (
        <View style={styles.container}>
            <Header
                title="PLANNER"
                showBack={false}
            />
            <ScrollView style={styles.scrollView}>
                {/* Headline */}
                <View style={styles.headlineContainer}>
                    <Text style={styles.headline}>PLAN</Text>
                    <Text style={styles.headline}>JOURNEY</Text>
                    <Text style={styles.subtitle}>SYSTEM ROUTE 1.0</Text>
                    <Text style={styles.time}>04:45 PM</Text>
                </View>

                <View style={styles.divider} />

                {/* Origin */}
                <View style={styles.locationContainer}>
                    <View style={styles.locationDot} style={{ backgroundColor: lightColors.border }} />
                    <View style={styles.locationInfo}>
                        <Text style={styles.locationLabel}>ORIGIN</Text>
                        <Text style={styles.locationValue}>SELECT ENTRY PLAZA</Text>
                    </View>
                </View>

                {/* Destination */}
                <View style={styles.locationContainer}>
                    <View style={[styles.locationDot, { backgroundColor: colors.primary }]} />
                    <View style={styles.locationInfo}>
                        <Text style={styles.locationLabel}>DESTINATION</Text>
                        <Text style={styles.locationValue}>SELECT EXIT PLAZA</Text>
                    </View>
                </View>

                {/* Vehicle Type */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionLabel}>VEHICLE TYPE</Text>
                    <View style={styles.vehicleGrid}>
                        {vehicles.map(vehicle => (
                            <TouchableOpacity
                                key={vehicle.id}
                                style={[
                                    styles.vehicleButton,
                                    selectedVehicle === vehicle.id && styles.vehicleButtonSelected,
                                ]}
                                onPress={() => setSelectedVehicle(vehicle.id)}>
                                <Icon
                                    name={vehicle.icon}
                                    size={32}
                                    color={
                                        selectedVehicle === vehicle.id
                                            ? colors.white
                                            : lightColors.text
                                    }
                                />
                                <Text
                                    style={[
                                        styles.vehicleLabel,
                                        selectedVehicle === vehicle.id && styles.vehicleLabelSelected,
                                    ]}>
                                    {vehicle.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Passengers */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionLabel}>PASSENGERS</Text>
                    <View style={styles.passengerCounter}>
                        <TouchableOpacity
                            style={styles.counterButton}
                            onPress={() => setPassengers(Math.max(1, passengers - 1))}>
                            <Text style={styles.counterButtonText}>−</Text>
                        </TouchableOpacity>
                        <Text style={styles.passengerCount}>{passengers.toString().padStart(2, '0')}</Text>
                        <TouchableOpacity
                            style={styles.counterButton}
                            onPress={() => setPassengers(passengers + 1)}>
                            <Text style={styles.counterButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Button */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    style={styles.calculateButton}
                    onPress={() => navigation.navigate('JourneyResults')}>
                    <Text style={styles.calculateButtonText}>CALCULATE ROUTE</Text>
                </TouchableOpacity>
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
    headlineContainer: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xl,
    },
    headline: {
        fontSize: typography.fontSize['5xl'],
        fontWeight: '800',
        color: lightColors.text,
        letterSpacing: -1,
    },
    subtitle: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
        marginTop: spacing.md,
        letterSpacing: typography.letterSpacing.wide,
    },
    time: {
        fontSize: typography.fontSize.base,
        color: lightColors.text,
        fontWeight: '500',
        marginTop: spacing.xs,
    },
    divider: {
        height: 1,
        backgroundColor: lightColors.border,
        marginHorizontal: spacing.lg,
        marginVertical: spacing.lg,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
    },
    locationDot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        marginRight: spacing.md,
    },
    locationInfo: {
        flex: 1,
    },
    locationLabel: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
        letterSpacing: typography.letterSpacing.wide,
        marginBottom: spacing.xs,
    },
    locationValue: {
        fontSize: typography.fontSize.base,
        color: lightColors.textSecondary,
        fontWeight: '500',
    },
    sectionContainer: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.lg,
    },
    sectionLabel: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: lightColors.text,
        letterSpacing: typography.letterSpacing.wider,
        marginBottom: spacing.md,
    },
    vehicleGrid: {
        flexDirection: 'row',
        gap: spacing.md,
    },
    vehicleButton: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: lightColors.surface,
        borderWidth: 2,
        borderColor: lightColors.border,
        borderRadius: borderRadius.md,
        alignItems: 'center',
        justifyContent: 'center',
    },
    vehicleButtonSelected: {
        backgroundColor: lightColors.text,
        borderColor: lightColors.text,
    },
    vehicleLabel: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: lightColors.text,
        marginTop: spacing.sm,
    },
    vehicleLabelSelected: {
        color: colors.white,
    },
    passengerCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: lightColors.text,
        borderRadius: borderRadius.md,
    },
    counterButton: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterButtonText: {
        fontSize: typography.fontSize['3xl'],
        color: lightColors.text,
        fontWeight: '300',
    },
    passengerCount: {
        flex: 1,
        fontSize: typography.fontSize['3xl'],
        fontWeight: '700',
        color: lightColors.text,
        textAlign: 'center',
    },
    bottomContainer: {
        padding: spacing.lg,
        backgroundColor: lightColors.background,
    },
    calculateButton: {
        backgroundColor: colors.primary,
        paddingVertical: spacing.md + 4,
        borderRadius: borderRadius.lg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    calculateButtonText: {
        color: colors.white,
        fontSize: typography.fontSize.sm,
        fontWeight: '700',
        letterSpacing: typography.letterSpacing.widest,
    },
});
