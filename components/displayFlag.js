import CountryFlag from 'react-native-country-flag';

export default function DisplayFlag(props) {
    return <CountryFlag isoCode={props.flag} size={150} />;
}
