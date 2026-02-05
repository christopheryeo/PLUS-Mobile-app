import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from '../components/Header';
import { ActionButton } from '../components/ActionButton';
import { StatsCard } from '../components/StatsCard';
import { lightColors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, borderRadius } from '../theme/spacing';

export const JourneyResultsScreen = ({ navigation }: any) => {
    const rnrStops = [
        {
            name: 'Seremban R&R (Southbound)',
            distance: '42 km away',
            amenities: 'Petrol • Food Court',
            icon: 'local-gas-station',
        },
        {
            name: 'Pedas Linggi Lay-by',
            distance: '88 km away',
            amenities: 'Prayer Room • Toilets',
            icon: 'wc',
        },
        {
            name: 'Ayer Keroh Overhead Bridge',
            distance: '138 km away',
            amenities: 'Premium Dining',
            icon: 'restaurant',
        },
    ];

    return (
        <View style={styles.container}>
            <Header
                title="JOURNEY RESULTS"
                onBackPress={() => navigation.goBack()}
            />
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}>
                {/* Large Time Display */}
                <View style={styles.headlineContainer}>
                    <Text style={styles.headline}>1H 45M</Text>
                </View>

                {/* Route Title */}
                <View style={styles.routeContainer}>
                    <Text style={styles.routeText}>Subang Jaya to Ayer Keroh</Text>
                </View>

                {/* Stats Grid */}
                <View style={styles.statsContainer}>
                    <View style={styles.statsGrid}>
                        <StatsCard label="TOLL" value="RM 18.50" style={styles.statsCard} />
                        <StatsCard label="FUEL" value="RM 24.30" style={styles.statsCard} />
                        <StatsCard label="DISTANCE" value="142 KM" style={styles.statsCard} />
                    </View>
                </View>

                {/* Section Header */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>UPCOMING R&R</Text>
                </View>

                {/* R&R List */}
                <View style={styles.rnrList}>
                    {rnrStops.map((stop, index) => (
                        <View key={index} style={styles.rnrItem}>
                            <View style={styles.rnrInfo}>
                                <Text style={styles.rnrName}>{stop.name}</Text>
                                <Text style={styles.rnrAmenities}>
                                    {stop.distance} • {stop.amenities}
                                </Text>
                            </View>
                            <Icon
                                name={stop.icon}
                                size={24}
                                color={
                                    index === 0 ? lightColors.primary : lightColors.textSecondary
                                }
                            />
                        </View>
                    ))}
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Bottom Button */}
            <View style={styles.bottomContainer}>
                <ActionButton
                    title="START NAVIGATION"
                    icon="navigation"
                    onPress={() => console.log('Navigate')}
                />
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
    scrollContent: {
        paddingBottom: spacing.xl,
    },
    headlineContainer: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xl + spacing.md,
        paddingBottom: spacing.sm,
    },
    headline: {
        fontSize: typography.fontSize['6xl'],
        fontWeight: '800',
        color: lightColors.text,
        letterSpacing: -2,
    },
    routeContainer: {
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.lg,
    },
    routeText: {
        fontSize: typography.fontSize.xl,
        fontWeight: '500',
        color: lightColors.textSecondary,
        borderLeftWidth: 4,
        borderLeftColor: lightColors.primary,
        paddingLeft: spacing.md,
    },
    statsContainer: {
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
    },
    statsGrid: {
        flexDirection: 'row',
        borderRadius: borderRadius.lg,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: lightColors.border,
    },
    statsCard: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: lightColors.border,
    },
    sectionHeader: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.lg,
        paddingBottom: spacing.md,
    },
    sectionTitle: {
        fontSize: typography.fontSize.xs,
        fontWeight: '800',
        color: lightColors.text,
        letterSpacing: typography.letterSpacing.widest,
        textTransform: 'uppercase',
    },
    rnrList: {
        paddingHorizontal: spacing.lg,
    },
    rnrItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: lightColors.border,
    },
    rnrInfo: {
        flex: 1,
    },
    rnrName: {
        fontSize: typography.fontSize.base,
        fontWeight: '700',
        color: lightColors.text,
        marginBottom: spacing.xs,
    },
    rnrAmenities: {
        fontSize: typography.fontSize.xs,
        fontWeight: '500',
        color: lightColors.textSecondary,
        textTransform: 'uppercase',
        letterSpacing: typography.letterSpacing.wide,
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: spacing.lg,
        backgroundColor: lightColors.background,
    },
});
