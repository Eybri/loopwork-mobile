import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  heroContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logoPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.3)',
    marginBottom: 32,
    ...Platform.select({
      ios: {
        shadowColor: '#6366f1',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  logoImage: {
    width: 80,
    height: 80,
  },
  titleContainer: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: -1,
    lineHeight: 56,
    textAlign: 'center',
  },
  heroTitleHighlight: {
    color: '#6366f1',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 28,
    maxWidth: 320,
  },
  ctaContainer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  primaryButton: {
    width: '100%',
    height: 64,
    borderRadius: 20,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#4f46e5',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  gradientButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
    width: '100%',
  },
  footerText: {
    color: 'rgba(148, 163, 184, 0.4)',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});
