import styles from './Quicklinks.module.css';
export default function Quicklink() {
  return (
    <div className={styles.head}>
    
      <div className="flex flex-col flex-1 border-2 p-4" style={{ backgroundColor: 'rgba(242, 224, 212, 1)' }}>
      <div className="flex mb-2 pt-1 border-4 justify-center text-sm" style={{ borderColor: 'rgba(160, 124, 114, 1)' }}>Quick Links</div>
        <div className="flex justify-between border-4 p-2" style={{ borderColor: 'rgba(160, 124, 114, 1)' }}>
          <div className="flex-1 mr-4 pr-4 border-r-2 " style={{ borderColor: 'rgba(160, 124, 114, 1)' }}>
            <a href="#" className="flex mb-1">Competitions</a>
            <a href="#" className="flex mb-1">Events</a>
            <a href="#" className="flex mb-1">Lectures</a>
            <a href="#" className="flex mb-1">Contact</a>
          </div>
          <div className="flex-1 text-right">
            <a href="#" className="flex mb-1">Schedule</a>
            <a href="#" className="flex mb-1">Workshops</a>
            <a href="#" className="flex mb-1">FAQs</a>
            <a href="#" className="flex mb-1">Team</a>
          </div>
        </div>
      </div>
  </div>
  );
}
