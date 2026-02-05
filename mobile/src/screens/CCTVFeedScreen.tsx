import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from '../components/Header';
import { lightColors, colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, borderRadius } from '../theme/spacing';

export const CCTVFeedScreen = ({ navigation }: any) => {
    const [selectedTab, setSelectedTab] = useState('northbound');

    const cameras = [
        { location: 'KM 459.4 BUKIT LANJAN', time: '5:9 PM AWAY', speed: 'NCC 12.25 V6' },
        { location: 'KM 457.5 SG BULOH', time: '5:9 PM AWAY', speed: 'NCC 12.21 V6' },
        { location: 'KM 455.0 DAMANSARA', time: '5:9 PM AWAY', speed: 'NCC 12.19 V6' },
        { location: 'KM 452.1 SUBANG', time: '10:2 PM AWAY', speed: 'NCC 12.09 V6' },
        { location: 'KM 448.0 SHAH ALAM', time: '15:1 PM AWAY', speed: 'NCC 14.09 V6' },
        { location: 'KM 445.0 SETIA ALAM', time: '22:0 PM AWAY', speed: 'NCC 12.09 V6' },
    ];

    return (
        <View style={styles.container}>
            <Header
                title="LIVE TRAFFIC FEED"
                onBackPress={() => navigation.goBack()}
                rightComponent={
                    <TouchableOpacity>
                        <Icon name="search" size={24} color={lightColors.text} />
                    </TouchableOpacity>
                }
            />

            {/* Tab Selector */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        selectedTab === 'northbound' && styles.tabActive,
                    ]}
                    onPress={() => setSelectedTab('northbound')}>
                    <Text
                        style={[
                            styles.tabText,
                            selectedTab === 'northbound' && styles.tabTextActive,
                        ]}>
                        NORTHBOUND
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        selectedTab === 'southbound' && styles.tabActive,
                    ]}
                    onPress={() => setSelectedTab('southbound')}>
                    <Text
                        style={[
                            styles.tabText,
                            selectedTab === 'southbound' && styles.tabTextActive,
                        ]}>
                        SOUTHBOUND
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Network Info */}
            <View style={styles.networkBanner}>
                <View style={styles.liveDot} />
                <Text style={styles.networkText}>LIVE NETWORK • E1 HIGHWAY</Text>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>FILTER</Text>
                </TouchableOpacity>
            </View>

            {/* Camera Grid */}
            <ScrollView style={styles.scrollView}>
                <View style={styles.cameraGrid}>
                    {cameras.map((camera, index) => (
                        <View key={index} style={styles.cameraCard}>
                            <View style={styles.cameraImage}>
                                <View style={styles.speedBadge}>
                                    <Icon name="speed" size={12} color={colors.white} />
                                    <Text style={styles.speedText}>{camera.speed}</Text>
                                </View>
                                <View style={styles.imagePlaceholder}>
                                    <Icon name="videocam" size={32} color={lightColors.border} />
                                </View>
                            </View>
                            <Text style={styles.cameraLocation}>{camera.location}</Text>
                            <Text style={styles.cameraTime}>{camera.time}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightColors.background,
    },
    tabContainer: {
        flexDirection: 'row',
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.md,
        gap: spacing.sm,
    },
    tab: {
        flex: 1,
        paddingVertical: spacing.sm,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    tabActive: {
        borderBottomColor: colors.primary,
    },
    tabText: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: lightColors.textSecondary,
        letterSpacing: typography.letterSpacing.wide,
    },
    tabTextActive: {
        color: colors.primary,
    },
    networkBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        backgroundColor: colors.white,
        marginTop: spacing.sm,
    },
    liveDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.green,
        marginRight: spacing.sm,
    },
    networkText: {
        flex: 1,
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: lightColors.text,
        letterSpacing: typography.letterSpacing.wide,
    },
    filterButton: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderWidth: 1,
        borderColor: lightColors.border,
        borderRadius: borderRadius.sm,
    },
    filterText: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: lightColors.text,
    },
    scrollView: {
        flex: 1,
    },
    cameraGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: spacing.lg,
        gap: spacing.md,
    },
    cameraCard: {
        width: '48%',
        backgroundColor: colors.white,
        borderRadius: borderRadius.md,
        overflow: 'hidden',
    },
    cameraImage: {
        position: 'relative',
    },
    speedBadge: {
        position: 'absolute',
        top: spacing.sm,
        left: spacing.sm,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.red,
        paddingHorizontal: spacing.xs,
        paddingVertical: 2,
        borderRadius: borderRadius.sm,
        zIndex: 1,
        gap: spacing.xs,
    },
    speedText: {
        color: colors.white,
        fontSize: 8,
        fontWeight: '700',
    },
    imagePlaceholder: {
        aspectRatio: 16 / 9,
        backgroundColor: lightColors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraLocation: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: lightColors.text,
        padding: spacing.sm,
        paddingBottom: spacing.xs,
    },
    cameraTime: {
        fontSize: 9,
        color: lightColors.textSecondary,
        paddingHorizontal: spacing.sm,
        paddingBottom: spacing.sm,
    },
});
