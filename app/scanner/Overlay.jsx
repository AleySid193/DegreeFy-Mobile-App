import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const scanAreaSize = 250;

export const Overlay = () => {
  return (
    <View style={styles.container}>
      {/* Top mask */}
      <View style={styles.topMask} />
      
      <View style={styles.centerRow}>
        {/* Left mask */}
        <View style={styles.sideMask} />
        
        {/* Scan window */}
        <View style={styles.scanWindow}>
          <View style={styles.cornerTopLeft} />
          <View style={styles.cornerTopRight} />
          <View style={styles.cornerBottomLeft} />
          <View style={styles.cornerBottomRight} />
        </View>
        
        {/* Right mask */}
        <View style={styles.sideMask} />
      </View>
      
      {/* Bottom mask */}
      <View style={styles.bottomMask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  topMask: {
    width: '100%',
    height: (height - scanAreaSize) / 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  centerRow: {
    flexDirection: 'row',
    width: '100%',
    height: scanAreaSize,
  },
  sideMask: {
    width: (width - scanAreaSize) / 2,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  scanWindow: {
    width: scanAreaSize,
    height: scanAreaSize,
    borderWidth: 0,
    position: 'relative',
  },
  bottomMask: {
    width: '100%',
    height: (height - scanAreaSize) / 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#00A651',
  },
  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: '#00A651',
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#00A651',
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: '#00A651',
  },
}); 