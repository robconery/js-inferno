function one2two() {
  m1len = m1.length ;
  for ( i=0; i<m1len ; i++){
    if (m1.options[i].selected == true ) {
      m2len = m2.length;
      m2.options[m2len]= new Option(m1.options[i].text);
    }
  }

  for ( i = (m1len -1); i>=0; i--){
    if (m1.options[i].selected == true ) {
      m1.options[i] = null;
    }
  }
}

function two2one() {
  m2len = m2.length ;
  for ( i=0; i<m2len ; i++){
    if (m2.options[i].selected == true ) {
      m1len = m1.length;
      m1.options[m1len]= new Option(m2.options[i].text);
    }
  }
  for ( i=(m2len-1); i>=0; i--) {
    if (m2.options[i].selected == true ) {
      m2.options[i] = null;
    }
  }
}