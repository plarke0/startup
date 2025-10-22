export default function LockedContent({ children, currentState, requiredState }) {
    return currentState === requiredState ? children : null;
}