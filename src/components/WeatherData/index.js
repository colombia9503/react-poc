import React, {Component} from 'react';
import WeatherTemperature  from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';
import convert from 'convert-units';

//api key: c6f658b15bcf636c6e647a2587114ce1
const apiKey = 'c6f658b15bcf636c6e647a2587114ce1';
const urlBase = 'http://api.openweathermap.org/data/2.5/';

class WeatherData extends Component {
    constructor({city}) {
        super();
        this.state = {
            counter: 0,
            city,
            data: null
        }
        
    }

    componentWillMount() {
        const {city} = this.state;
        const apiWeather = `${urlBase}weather?q=${city}&APPID=${apiKey}`;
        console.log(apiWeather)
        fetch(apiWeather).then(response => {
            return response.json();
        }).then(body => {
            this.getData(body);
        });
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    getData = (weatherData) => {
        let {humidity, temp} = weatherData.main;
        let {speed} = weatherData.wind;
        let state = 'night-cloudy-high';

        let data = {
            humidity,
            temperature: convert(temp).from('K').to('C'),
            state,
            wind: `${speed} m/s`
        }
        this.setState({data});
    }

    render = () => {
        console.log('render');
        let data = this.state.data;
        return(
        <div className='weatherData'>
            { data ? <WeatherTemperature temperature = {data.temperature} state = {data.state}/> : 'Cargando..'}
            { data ? <WeatherExtraInfo humidity ={data.humidity} wind={data.wind}/> : 'Cargando..'}
            <hr/>
        </div>);
    };
} 


export default WeatherData;
