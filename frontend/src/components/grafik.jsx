/* eslint-disable react/prop-types */
import {useState,useEffect} from 'react'
import axios from 'axios';
import { grafik } from '../utils/api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import GrafikValue from './grafikValue';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const GrafikData= ({dataValue,id}) => {
  const [data,setData] = useState([])
  const getDataGrafik = async () => {
    await axios.get(`${grafik.get}${id}&getDateQuery=${dataValue}`,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token') 
      }
    })
    .then(response => {
      setData(response.data)
    })
  }
  useEffect(() => {
    getDataGrafik()
  }, [id,dataValue]);
    return (
      <div style={{ width: '100%', height: '95%' }}>
        <GrafikValue className='grafik' data={{
          value: dataValue,
          label: Object.values(data).map((item) => item.label),
          data: Object.values(data).map((item) => item.data),
        }
        } />
      </div>
    )
}
export default GrafikData
