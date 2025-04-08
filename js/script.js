// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

function calculateCelcius() {
  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

  // process
  const celcius = (fahrenheit - 32) * 5/9; 

  // output
  document.getElementById('temperature').innerHTML = 'The Temperature is ' + celcius + '°'
}


