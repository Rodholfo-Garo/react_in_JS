import styled from 'styled-components'
import { Props } from './index'

export const Titulo = styled.h3<Props>`
  color: #282aa5;
  font-size: ${(props) => props.fontSize ? props.fontSize + 'px' : '140px'};
  font-weight: bold;
  margin-bottom:16px;
`
