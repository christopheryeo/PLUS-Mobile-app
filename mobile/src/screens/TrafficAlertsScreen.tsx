import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { lightColors, colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, borderRadius } from '../theme/spacing';

export const TrafficAlertsScreen = ({ navigation }: any) => {
    const incidents = [
        {
            type: 'ACCIDENT',
            severity: 'high',
            location: 'RIGHT LANE BLOCKED AT SEREMBAN EXIT',
            description:
                'Expect delays of up to 10 minutes. Emergency services are on-site.',
            km: 'KM 226.4',
            time: '08AGO',
            hasCamera: true,
        },
        {
            type: 'ROADWORKS',
            severity: 'medium',
            location: 'MAINTENANCE WORKS AT NILAI',
            description:
                'Left lane closure in effect until 18:00. Please follow on-site signage.',
            km: 'KM 552.6',
            time: '10AGO',
            hasCamera: false,
        },
        {
            type: 'TRAFFIC INFO',
            severity: 'low',
            location: 'HEAVY RAIN: RAWANG TO SUNGAI BULOH',
            description:
                'Visibility reduced. Please switch on headlamps and reduce speed.',
            km: 'KM 436.8',
            time: '09AGO',
            hasCamera: false,
        },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Icon name="insights" size={24} color={colors.primary} />
                <Text style={styles.headerTitle}>PLUS{'\n'}JOURNEY INSIGHTS</Text>
                <Icon name="search" size={24} color={lightColors.text} />
                <Icon name="account-circle" size={24} color={lightColors.text} />
            </View>

            <ScrollView style={styles.scrollView}>
                {/* Route Info */}
                <View style={styles.routeCard}>
                    <Text style={styles.routeLabel}>YOUR JOURNEY</Text>
                    <Text style={styles.routeTitle}>E1 NORTHBOUND</Text>
                </View>

                {/* Main Alert */}
                <View style={styles.mainAlert}>
                    <View style={styles.alertHeader}>
                        <Icon name="warning" size={32} color={colors.red} />
                        <Text style={styles.alertTitle}>
                            TRAFFIC ALERT:{'\n'}SEREMBAN R&R CONGESTED
                        </Text>
                    </View>

                    <View style={styles.statsRow}>
                        <View style={styles.statBox}>
                            <Text style={styles.statLabel}>CAPACITY</Text>
                            <Text style={styles.statValue}>99%</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statBox}>
                            <Text style={styles.statLabel}>WAIT TIME</Text>
                            <Text style={styles.statValue}>&gt; 20 MINS</Text>
                        </View>
                    </View>

                    <View style={styles.recommendation}>
                        <View style={styles.recommendationHeader}>
                            <Icon name="check-circle" size={20} color={colors.primary} />
                            <Text style={styles.recommendationTitle}>AI RECOMMENDATION</Text>
                        </View>
                        <Text style={styles.recommendationText}>
                            Rerouting to Ayer Keroh OBR{'\n'}(20km ahead).
                        </Text>
                        <View style={styles.incentive}>
                            <Icon name="local-cafe" size={16} color={colors.white} />
                            <Text style={styles.incentiveText}>
                                50% OFF COFFEE IF YOU STOP AT{'\n'}AYER KEROH.
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.acceptButton}>
                        <Text style={styles.acceptButtonText}>ACCEPT & REROUTE</Text>
                        <Icon name="alt-route" size={20} color={colors.white} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dismissButton}>
                        <Text style={styles.dismissButtonText}>DISMISS</Text>
                    </TouchableOpacity>
                </View>

                {/* Rest Stop Recommendation */}
                <View style={styles.restStopCard}>
                    <View style={styles.restStopHeader}>
                        <Icon name="local-gas-station" size={20} color={colors.primary} />
                        <Text style={styles.restStopTitle}>NEXT STOP RECOMMENDATION</Text>
                    </View>
                    <Text style={styles.restStopName}>SEREMBAN R&R{'\n'}(SOUTH)</Text>
                    <View style={styles.amenities}>
                        <Icon name="local-gas-station" size={16} color={colors.primary} />
                        <Icon name="restaurant" size={16} color={colors.primary} />
                        <Icon name="wc" size={16} color={colors.primary} />
                        <Icon name="ev-station" size={16} color={colors.primary} />
                    </View>
                    <View style={styles.rating}>
                        <Text style={styles.ratingValue}>4.2</Text>
                        <Text style={styles.ratingLabel}>RATING</Text>
                    </View>
                </View>

                {/* Incidents List */}
                {incidents.map((incident, index) => (
                    <View key={index} style={styles.incidentCard}>
                        <View
                            style={[
                                styles.incidentBadge,
                                incident.severity === 'high' && styles.incidentBadgeHigh,
                                incident.severity === 'medium' && styles.incidentBadgeMedium,
                            ]}>
                            <Text style={styles.incidentBadgeText}>{incident.type}</Text>
                        </View>
                        <Text style={styles.incidentKm}>{incident.km}</Text>
                        <Text style={styles.incidentTime}>{incident.time}</Text>
                        <Text style={styles.incidentLocation}>{incident.location}</Text>
                        <Text style={styles.incidentDescription}>
                            {incident.description}
                        </Text>
                        {incident.hasCamera && (
                            <TouchableOpacity style={styles.cameraButton}>
                                <Icon name="videocam" size={16} color={colors.white} />
                                <Text style={styles.cameraButtonText}>VIEW FEED: CCTV</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightColors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        paddingTop: spacing.xl + spacing.md,
        backgroundColor: colors.white,
        gap: spacing.md,
    },
    headerTitle: {
        flex: 1,
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: lightColors.text,
        lineHeight: typography.fontSize.sm * 1.2,
    },
    scrollView: {
        flex: 1,
    },
    routeCard: {
        backgroundColor: colors.white,
        padding: spacing.md,
        marginHorizontal: spacing.lg,
        marginTop: spacing.md,
        borderRadius: borderRadius.md,
    },
    routeLabel: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
        marginBottom: spacing.xs,
    },
    routeTitle: {
        fontSize: typography.fontSize.lg,
        fontWeight: '700',
        color: lightColors.text,
    },
    mainAlert: {
        backgroundColor: colors.white,
        padding: spacing.lg,
        marginHorizontal: spacing.lg,
        marginTop: spacing.md,
        borderRadius: borderRadius.md,
        borderLeftWidth: 4,
        borderLeftColor: colors.red,
    },
    alertHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: spacing.md,
        gap: spacing.md,
    },
    alertTitle: {
        flex: 1,
        fontSize: typography.fontSize.lg,
        fontWeight: '800',
        color: lightColors.text,
    },
    statsRow: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: lightColors.border,
        borderRadius: borderRadius.md,
        overflow: 'hidden',
        marginBottom: spacing.md,
    },
    statBox: {
        flex: 1,
        padding: spacing.md,
        alignItems: 'center',
    },
    statDivider: {
        width: 1,
        backgroundColor: lightColors.border,
    },
    statLabel: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
        marginBottom: spacing.xs,
    },
    statValue: {
        fontSize: typography.fontSize.xl,
        fontWeight: '700',
        color: colors.red,
    },
    recommendation: {
        backgroundColor: lightColors.background,
        padding: spacing.md,
        borderRadius: borderRadius.md,
        marginBottom: spacing.md,
    },
    recommendationHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        marginBottom: spacing.sm,
    },
    recommendationTitle: {
        fontSize: typography.fontSize.sm,
        fontWeight: '700',
        color: colors.primary,
    },
    recommendationText: {
        fontSize: typography.fontSize.base,
        color: lightColors.text,
        marginBottom: spacing.sm,
    },
    incentive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        padding: spacing.sm,
        borderRadius: borderRadius.sm,
        gap: spacing.sm,
    },
    incentiveText: {
        flex: 1,
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: colors.white,
    },
    acceptButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        paddingVertical: spacing.md,
        borderRadius: borderRadius.md,
        marginBottom: spacing.sm,
        gap: spacing.sm,
    },
    acceptButtonText: {
        fontSize: typography.fontSize.sm,
        fontWeight: '700',
        color: colors.white,
    },
    dismissButton: {
        alignItems: 'center',
        paddingVertical: spacing.md,
    },
    dismissButtonText: {
        fontSize: typography.fontSize.sm,
        fontWeight: '700',
        color: lightColors.text,
    },
    restStopCard: {
        backgroundColor: lightColors.background,
        padding: spacing.md,
        marginHorizontal: spacing.lg,
        marginTop: spacing.md,
        borderRadius: borderRadius.md,
        borderWidth: 2,
        borderColor: colors.primary,
    },
    restStopHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        marginBottom: spacing.sm,
    },
    restStopTitle: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: colors.primary,
        letterSpacing: typography.letterSpacing.wide,
    },
    restStopName: {
        fontSize: typography.fontSize.xl,
        fontWeight: '800',
        color: lightColors.text,
        marginBottom: spacing.sm,
    },
    amenities: {
        flexDirection: 'row',
        gap: spacing.sm,
        marginBottom: spacing.sm,
    },
    rating: {
        alignSelf: 'flex-start',
    },
    ratingValue: {
        fontSize: typography.fontSize['4xl'],
        fontWeight: '800',
        color: colors.primary,
    },
    ratingLabel: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
    },
    incidentCard: {
        backgroundColor: colors.white,
        padding: spacing.md,
        marginHorizontal: spacing.lg,
        marginTop: spacing.md,
        borderRadius: borderRadius.md,
    },
    incidentBadge: {
        alignSelf: 'flex-start',
        backgroundColor: colors.yellow,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.sm,
        marginBottom: spacing.sm,
    },
    incidentBadgeHigh: {
        backgroundColor: colors.red,
    },
    incidentBadgeMedium: {
        backgroundColor: colors.yellow,
    },
    incidentBadgeText: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: colors.white,
    },
    incidentKm: {
        fontSize: typography.fontSize.sm,
        fontWeight: '700',
        color: lightColors.text,
    },
    incidentTime: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
        marginBottom: spacing.sm,
    },
    incidentLocation: {
        fontSize: typography.fontSize.base,
        fontWeight: '700',
        color: lightColors.text,
        marginBottom: spacing.xs,
    },
    incidentDescription: {
        fontSize: typography.fontSize.sm,
        color: lightColors.textSecondary,
        lineHeight: typography.fontSize.base * 1.5,
        marginBottom: spacing.sm,
    },
    cameraButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: lightColors.text,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.sm,
        gap: spacing.sm,
    },
    cameraButtonText: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: colors.white,
    },
});
