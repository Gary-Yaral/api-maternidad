function multiUpdate(data) {
  let ids = ""
  let query = `UPDATE activity_student SET qualification= CASE `
  data.forEach((param, index) => {
    query += `WHEN id='${param.id}' THEN '${param.qualification}' `
    ids += param.id
    if(index !== (data.length - 1)) {
      ids += ", "
    }
  })

  query += `ELSE qualification END WHERE id IN(${ids});`
  return {query}
}

function multiFinalUpdate(data) {
  let ids = ""
  let query = `UPDATE final_activity_student SET qualification= CASE `
  data.forEach((param, index) => {
    query += `WHEN id='${param.id}' THEN '${param.qualification}' `
    ids += param.id
    if(index !== (data.length - 1)) {
      ids += ", "
    }
  })

  query += `ELSE qualification END WHERE id IN(${ids});`
  return {query}
}

function datesQuery(dates) {
  let query = `SELECT 
  subject_student.id, 
  CONCAT(student.name,' ', student.lastname) AS student,`
  dates.forEach(({date}, index) => {
    query += `SUM(CASE WHEN assist_subject.date = '${date}' THEN assist.status ELSE 0 END) AS '${date}'`
    if(index !== (dates.length - 1)) {
      query += ", "
    }
  })

  query += ` FROM assist
  INNER JOIN assist_subject
  ON assist_subject.id = assist.assist_subject_id
  INNER JOIN subject_student ON subject_student.id = assist.subject_student
  INNER JOIN student ON student.id = subject_student.student_id
  GROUP BY student.id`;

  return query
}

function updateMultiAssists(data, assistId) {
  let query = `UPDATE assist SET status = CASE `
  let subjectStudentIds = ""
  data.forEach((obj, index) => {
    query += `WHEN subject_student="${obj.subjectStudentId}" 
              AND assist_subject_id = "${assistId}" 
              THEN "${obj.status}" `
    subjectStudentIds += obj.subjectStudentId
    if(index !== (data.length - 1)) {
      subjectStudentIds += ", "
    }
  })

  query += `ELSE status END 
            WHERE subject_student IN(${subjectStudentIds});`
  return {query}
}

function insertMultiAssists(data, subjectStudentId) {
  let query = `INSERT INTO 
                assist(subject_student, assist_subject_id, status) 
              VALUES`
  data.forEach((obj, index) => {
    query += `("${subjectStudentId}", "${obj.id}", "5")`
    if(index !== (data.length - 1)) {
      query += ", "
    }
  })
  query += ";"
  return {query}
}

function getArrayReport(data, trimPartId, subjectId) {
  let query = `SELECT acs.subject_student_id,
  CONCAT(student.name, " ", student.lastname) AS name,`

  data.forEach((obj, index) => {
    query += `COALESCE((SELECT TRUNCATE(AVG(qualification), 2) 
    FROM activity_student acs${index}
    INNER JOIN activity ON activity.id = acs${index}.activity_id
    INNER JOIN subject_student ss ON ss.id = acs${index}.subject_student_id
    WHERE activity.trimester_partial_id = '${trimPartId} AND '
      AND acs${index}.subject_student_id = acs.subject_student_id
      AND ss.subject_id = '${subjectId}' 
      AND activity.activity_type_id = ${obj.id}), 0.00) AS '${obj.id}'`
    if(index !== (data.length - 1)) {
      query += ", "
    }
  })
query += `
    FROM activity_student acs
    INNER JOIN activity ON activity.id = acs.activity_id
    INNER JOIN subject_student ss ON ss.id = acs.subject_student_id
    INNER JOIN student ON student.id = ss.student_id
    WHERE activity.trimester_partial_id = 1 AND ss.subject_id = '${subjectId}'
    GROUP BY acs.subject_student_id;
`
return {query} 
}

module.exports = { 
  multiUpdate, 
  datesQuery, 
  updateMultiAssists,
  insertMultiAssists,
  multiFinalUpdate,
  getArrayReport
};