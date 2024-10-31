const HeightConversion = (decimeter) => {
    const meter = decimeter * 0.1;
    const feet = Math.floor(meter * 3.28084);
    const inches = Math.round((meter * 3.28084 - feet) * 12);

    if (inches === 12) {
        return `${feet + 1}'00 ft`;
    }

    return `${feet}'${inches < 10 ? '0' : ''}${inches} ft`;
}

export default HeightConversion;
