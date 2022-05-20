import React from 'react'
import "./Widgits.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';

function Widgits() {
    const newsArticle = (heading , subtitle) => (
        <div className="widgits_article">
                  <div className="widgits_left">
                            <FiberManualRecordIcon />
                  </div>

                  <div className="widgits_right">
                            <h4>{heading}</h4>
                            <p>{subtitle}</p>
                  </div>
        
        </div>
)

  return (
    <div className="widgits">
    <div className="widgits_header">
              <h2>Linkedin news</h2>
              <InfoIcon />
    </div>
    {newsArticle("New I Phone 12", "Top news - 9099 readers")}
    {newsArticle("CoronaVirus: UK updates", "Top news 888 readers")}
    {newsArticle("Tesla hits new High", "Car and Auto - 300 readers")}
    {newsArticle("Bitcoin Breaks All Records", "Crypto - 8000 readers")}
    {newsArticle("Is Redux too good", "code : 122 readers")}
     {newsArticle("Coronavirus: India Upadtes", "Top News - 9987 readers")}
    
</div>
  )
}

export default Widgits