let table_01, data_elements;


function preload() 
{
  table_01 = loadTable("tabelafinal.csv", "csv", "header");
}


function setup() 
{
  createCanvas (windowWidth, windowHeight);
  importData();
}


function draw() 
{
  background (240);
  drawData();
}


function importData() 
{
  data_elements = [];
  
  for (let r=0; r<table_01.getRowCount(); r++) 
  {
    const ano    = table_01.getString (r, "anos");
    const total   = table_01.getNum (r, "total");
    const hoteis = table_01.getNum (r, "hoteis");
    
    data_elements[r] = new DataElement (ano, total, hoteis);
  }
}


function drawData() 
{
  const dist_between = 8;
  const scalar = 10;
  
  const x = 100;
  let y = 0;
  
  for (let i=0; i<data_elements.length; i++) 
  {
    y += data_elements[i].total/scalar + dist_between;
    
    data_elements[i].drawDataElement (x, y, scalar);
  }
}


class DataElement 
{
  constructor (ano, total, hoteis) 
  {
    this.ano  = ano;
    this.total = total;
    this.hoteis   = hoteis;
  }

  drawDataElement (x, y, scalar) 
  { 
    noStroke();
    fill (220);
    ellipse (x, y, this.total/scalar);
    
    noFill();
    
    stroke (0, 180, 0);
    ellipse (x, y, this.hoteis/scalar);
    
    noStroke();
    fill (0);
    textAlign (CENTER, CENTER);
    textSize (14);
    text (this.ano, x + 50, y);
  }
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}

