.container {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    font-style: Open Sans;

  }
  
  .dish-info {
    flex: 1;
    padding-right: 20px;
  }
  
  .dish-name {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
    width: 200px;
  }
  
  .rating {
    color: white;
    font-size: 18px;
    background-color: rgb(14, 216, 14);
  }
  
  .dish-description {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
    max-width: 600px;
  }
  
  .time {
    font-size: 14px;
    color: #999;
  }
  
  .dish-image img {
    max-width: 300px;
  }

  @media (max-width: 768px) {
    .dish-image img {
        max-width: 140px;
        height: 200px;

        margin-left: -10px;
      }
      .dish-image{
        margin-top: 40%;
      }
  }
  
/* Existing styles */
.ingredients-container {
    max-width: 1500px;
    padding: 20px;
    border-radius: 5px;
    margin-top: 9%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .ingredients-title {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
    margin-top: -10%;
  }
  
  .ingredients-subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .ingredients-group {
    margin-bottom: 20px;
  }
  
  .ingredients-group-title {
    font-size: 18px;
    color: #444;
    margin-bottom: 10px;
  }
  
  .ingredients-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
  
  .ingredient-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
  }
  
  .ingredient-value {
    font-weight: bold;
    color: #333;
  }


.icon-container {
    display: flex;
    justify-content:space-evenly; 
  }
  
  .icon {
    text-align: center;
  }
  
  .icon img {
    width: 50px; 
  }
  
  .icon span {
    display: block;
    margin-top: 5px; 
  }
  .appliances-container{
    display: flex;
    justify-content: center;
  }
  
