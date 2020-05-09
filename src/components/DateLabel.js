import React from 'react'
import styled from 'styled-components'
import format from 'date-fns/fp/format'

const Inner = styled.div`
    text-transform: uppercase;
    font-family: "Open Sans";
    font-size: 14px;
    color: black;
    text-align: center;
`

const DateLabel = ({ date, className }) => {
    return (
        <Inner className={className}>
            {format("d MMMM, yyyy", date)}
        </Inner>
    )
}



export default styled(DateLabel)({})