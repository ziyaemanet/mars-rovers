const info = {
  curiosity: {
    cameras:['FHAZ','RHAZ','MAST','CHEMCAM','MAHLI','MARDI','NAVCAM'],
    dateStart:'2012-08-06',
    totalPics:'280105'
  },
  opportunity: {
    cameras:['FHAZ','RHAZ','NAVCAM','PANCAM','MINITES'],
    dateStart:'2004-01-25',
    totalPics: '183991'
  },
  spirit: {
    cameras:['FHAZ','RHAZ','NAVCAM','PANCAM','MINITES'],
    dateStart:'2004-01-04',
    totalPics: '124550'
  }
};

const CameraDateInfo = {
  getInfo(rover){
    return info[rover];
  }
}

export default CameraDateInfo;
