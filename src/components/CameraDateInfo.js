import moment from 'moment';

const info = {
  curiosity: {
    cameras:['FHAZ','RHAZ','MAST','CHEMCAM','MAHLI','MARDI','NAVCAM'],
    dateStart:'2012-08-06',
    dateEnd:  moment().subtract(7,'days').format('YYYY-MM-DD')
  },
  opportunity: {
    cameras:['FHAZ','RHAZ','NAVCAM','PANCAM','MINITES'],
    dateStart:'2004-01-26',
    dateEnd: moment().subtract(7,'days').format('YYYY-MM-DD')
  },
  spirit: {
    cameras:['FHAZ','RHAZ','NAVCAM','PANCAM','MINITES'],
    dateStart:'2004-01-05',
    dateEnd: '2010-03-20'
  }
};

const CameraDateInfo = {
  getInfo(rover){
    return info[rover];
  }
}

export default CameraDateInfo;
