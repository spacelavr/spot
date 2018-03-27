const SPOT_STATUS = {
  "OPEN":       "OPEN",
  "CLOSED":     "CLOSED",
  "WAIT_GROUP": "WAIT_GROUP"
};

const NOTIFY_STATUS = {
  "NOTIFIED_ONE_DAY_BEFORE":  "NOTIFIED_ONE_DAY_BEFORE",
  "NOTIFIED_TWO_HOUR_BEFORE": "NOTIFIED_TWO_HOUR_BEFORE",
  "NOT_YET_NOTIFIED":         "NOT_YET_NOTIFIED"
};

module.exports = {NOTIFY_STATUS, SPOT_STATUS};
