/**
 * A value that is wrapped in an object reference and has some event handling around it.
 * 
 * This is designed to allow the programmer to decide when to publish/react to a value changing, 
 * rather than relying on something Redux for state management.
 */
class Observable<TValue> {

    /** The current actual value */
    private value: TValue;
    
    /** The set of callbacks interested in this variable */
    private callbacks: ((value: TValue) => void)[];

    /**
     * Build a new Event Value with the given paramters
     * 
     * @param value The starting value
     */
    public constructor(value: TValue) {
        this.value = value;
        this.callbacks = [];
    }

    /**
     * Updates the value and triggers the callbacks
     * 
     * @param value The new value of this Event Value
     */
    public setValue(value: TValue) {
        this.value = value;
        this.callbacks.forEach((callback) => {
            callback(this.value);
        });
    }

    /**
     * Returns the current value.
     * 
     * NOTE: If the value is an object and you mutate the object, it will NOT trigger any listeners.
     * Values must always be set via setValue, so either use an immutable object and publish the change via the parent object,
     * or, give the parent object a full set of EventValue itself.
     */
    public getValue = () => {
        return this.value;
    };

    /**
     * Registers the given callback to be triggerd when the value changes
     * 
     * @param callback The callback to register
     */
    public registerOnChange(callback: (value: TValue) => void): void {
        this.callbacks.push(callback);
    }

    /** 
     * Deregisters a previously registered callback. Very important to remember to do when an object is leaving scope or a component unmounts.
     * 
     * @param callback The callback to deregister
     * */
    public deregisterOnChange(callback: (value: TValue) => void): void {
        this.callbacks.splice(this.callbacks.indexOf(callback), 1);
    }
}

export default Observable;